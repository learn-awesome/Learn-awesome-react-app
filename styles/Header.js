import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${'' /* Logo */}

  #logo {
    width: 2rem;
    margin-left: 1rem;
  }
`;

export const LoginSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  p {
    margin-left: 2rem;
    cursor: pointer;
  }
`;

// Theme Toggle

export const ThemeSwitch = styled.div`
  margin-right: 0.5rem;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background: linear-gradient(to right, #fefb72, #f0bb31);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
