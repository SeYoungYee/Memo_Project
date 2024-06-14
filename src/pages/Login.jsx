import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledHeader, Title, LoginForm, Input, Button } from '../components/StyledComponent';
import { login } from '../lib/api/auth';

function Login({ setUser }) {  // setUser prop을 받아옴 왜 여기서 받아오나?
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        if (id.length < 4 || id.length > 10) {
            alert('아이디는 4글자 ~ 10글자 이내로 다시 입력바람.');
            return;
        }
        if (password.length < 4 || password.length > 15) {
            alert('비밀번호는 4글자 ~ 15자글자 이내로 다시 입력바람.');
            return;
        }
        const { userId, nickname, avatar } = await login({
            id: id, 
            password: password 
        });
        alert('로그인 완료');
        setUser({ userId, nickname, avatar });
        navigate("/")
    };

    return (
        <>
            <StyledHeader>
                <Title>로그인 페이지</Title>
            </StyledHeader>

            <LoginForm>
                <label htmlFor="login_id">아이디</label>
                <Input type="text" id="login_id"
                    placeholder='아이디'
                    onChange={(e) => setId(e.target.value)}></Input>

                <label htmlFor="login_password">비밀번호</label>
                <Input type="password" id="login_password"
                    placeholder='비밀번호'
                    onChange={(e) => setPassword(e.target.value)}></Input>

                <Button onClick={handleSignIn}>로그인</Button> {/* handleSignIn에 인수 전달하지 않음 */}
                <Button onClick={() => navigate("/register")}>회원가입</Button>
            </LoginForm>
        </>
    )
}

export default Login;
