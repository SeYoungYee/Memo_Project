import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { StyledHeader, Title, LoginForm, Input, Button } from '../components/StyledComponent';
import { register } from '../lib/api/auth';

function Register() {
    const [id, SetId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();

    // 데이터 넣는 부분 + 유효성 검사
    const SubmitHandler = async () => {
        if (id.length < 4 || id.length > 10) {
            alert('아이디는 4글자 ~ 10글자 이내로만 가능합니다.');
            return;
        }
        if (password.length < 4 || password.length > 15) {
            alert('비밀번호는 4글자 ~ 15자글자 이내로만 가능합니다.');
            return;
        }
        if (nickname.length < 1 || nickname.length > 10) {
            alert('닉네임은 1글자 ~ 10글자 이내로만 가능합니다.');
            return;
        }

        const response = await register({
            id: id,
            password: password,
            nickname: nickname,
        });
        
        if (response) {
            navigate("/");
            confirm('회원가입 완료');
            console.log('회원가입 API =>' + response);
        }
    };

    return (
        <>
            <StyledHeader>
                <Title>회원가입 페이지</Title>
            </StyledHeader>

            <LoginForm>
                <label htmlFor="register_id">아이디</label>
                <Input type="text" id="register_id" placeholder='아이디' onChange={(e) => SetId(e.target.value)}></Input>

                <label htmlFor="register_password">비밀번호</label>
                <Input type="password" id="register_password" placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)}></Input>

                <label htmlFor="register_nickname">닉네임</label>
                <Input type="text" id="register_nickname" placeholder='닉네임' onChange={(e) => setNickname(e.target.value)}></Input>

                <Button onClick={SubmitHandler}>회원가입 하기</Button>
            </LoginForm>
        </>
    )
}

export default Register;
