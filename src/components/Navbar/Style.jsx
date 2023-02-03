import styled from "styled-components";

export const NAVBAR = styled.nav`
display: flex;
flex-direction: row;
background-color: #bdbdbd;


.nav__container_logo{
  display: flex;
  background-color: #4e4e4e;
  width: 10%;
  height: 60px;

  p{
    margin: auto; 
    color: #fff;
  }
}

.nav__container_social{
  display: flex;
  background-color: #4e4e4e;
  width: 10%;
  height: 60px;

  p{
    margin: auto; 
    color: #fff;
  }
}


.nav__container{ 
  display: flex;
  margin: auto;
  width: 90%;
  height: 60px;  
}

.menu__container_color_grey{
  background-color: #9c9c9c;
}


.menu__list{

  width: 100%;
  display: flex;
  margin: auto;
  
  ul{
    list-style: none;
  }

  li{
    display: flex;
    margin: auto;

    a{
    text-decoration:none;  
    color: #fff;
     }
  }  
  
}
`;

export const MENU = styled.div``;

export const MENUMOBILE = styled.div``;

export const SOCIAL = styled.div``;

export const HEADER = styled.header``;

export const SECTION = styled.section``;

export const FOOTER = styled.footer``;