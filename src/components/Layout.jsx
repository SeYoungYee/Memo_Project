import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getUserInfo } from "../lib/api/auth";
import { useEffect } from "react";

const Navvar = styled.nav`
    background-color: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width: 100%; 
    top: 0;
    z-index: 1000;
`;

const NavItems = styled.div`
    display: flex;
    align-items: center;
`;

const NavItem = styled(Link)`
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const UserProfile = styled.div`
    display: flex;
    align-items: center;

`;

const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserName = styled.span`
    color: white;
    margin-right: 20px;
    border: 1px solid red;
    padding: 5px;
`;

const LogoutButton = styled.button`
    padding: 8px 12px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #cc0000;
    }
`;

const PageContainer = styled.div`
    padding: 80px;
`;

export default function Layout({ user, setUser }) {
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo().then((res) => {
            if (res) {
                setUser({
                    userId: res.id,
                    nickname: res.nickname,
                    avatar: res.avatar,
                });
            } else {
                handleLogout();
            }
        });
    }, []);

    const handleLogout = () => {
        setUser(null);
        navigate("/login");
        localStorage.clear();
    };

    return (
        <>
            <Navvar>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/profile">내 프로필</NavItem>
                </NavItems>
                <UserProfile>
                    {user && (
                        <>
                            <UserAvatar src={user.avatar} alt="User Avartar" />
                            <UserName>닉네임: {user.nickname}</UserName>
                            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                        </>
                    )}
                </UserProfile>
            </Navvar>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </>
    );
}
