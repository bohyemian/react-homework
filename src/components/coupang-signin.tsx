import { useState } from "react";
import CoupangCheck from "./coupang-checkbox";
import CoupangInput from "./coupang-input";
import CoupangLogo from "./coupang-logo";
import CoupanButton from "./coupang-button";

function CoupangSignIn() {
  const [loginKeep, setLoginKeep] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>('');
  const [showEmailHint, setEmailHint] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [showPasswordHint, setPasswordHint] = useState<boolean>(false);
  const emailHint = ['아이디(이메일)를 입력해주세요.', '아이디(이메일)는 이메일 형식으로 입력해주세요.']
  const passwordHint = ['비밀번호를 입력해주세요.', '숫자, 영어 조합 6자리 이상 입력해야 합니다.']
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

  const handleLoginKeep = () => {
    setLoginKeep(!loginKeep);
  }

  const handleChangeValue = (target: EventTarget & HTMLInputElement): void => {
    switch (target.type) {
      case 'email':
        setEmailValue(target.value);
        break;

      case 'password':
        setPasswordValue(target.value)
        break;
    }
  }

  const handleBlur = (target: EventTarget & HTMLInputElement) => {
    switch (target.type) {
      case 'email':
        setEmailHint(!emailRegex.test(target.value))
        break;

      case 'password':
        setPasswordHint(!passwordRegex.test(target.value))
        break;
    }
  }

  return (
    <div className="coupang-wrap">
      <div className="logo">
        <CoupangLogo />
      </div>
      <form action="">
        <div className="input-form-wrap">
          <CoupangInput label="아이디(이메일)" labelHidden={!!emailValue.length} type="email" onChangeValue={handleChangeValue} onInputBlur={handleBlur} />
          {showEmailHint && <div className="input-hint">{emailHint[emailValue.length ? 1: 0]}</div>}
          <CoupangInput label="비밀번호" labelHidden={!!passwordValue.length} type="password" onChangeValue={handleChangeValue} onInputBlur={handleBlur} />
          {showPasswordHint && <div className="input-hint">{passwordHint[passwordValue.length ? 1: 0]}</div>}
        </div>
        <div className="login-option">
          <CoupangCheck label="자동로그인" checked={loginKeep} onChecked={handleLoginKeep} />
          {loginKeep &&
            <div className="tooltip">
              개인 정보 보호를 위해 본인 기기에서만 이용해주세요
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                <path d="M0 7.84619L4.85716 0.846191L10 7.84619H0Z" fill="#F4F4F4" />
              </svg>
            </div>}
          <a href="/" className="btn-arrow">
            <span>아이디(이메일)/비밀번호 찾기</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={11} height={18} viewBox="0 0 11 18" fill="none">
              <path d="M1.5 1L9.5 9L1.5 17" stroke="#0074E9" strokeWidth={2} />
            </svg>
          </a>
        </div>
        <div className="btn-wrap">
          <CoupanButton className="primary" disabled>로그인</CoupanButton>
          <hr className="line" />
          <CoupanButton>회원가입</CoupanButton>
        </div>
      </form>
      <p className="copyright">ⓒCoupang Corp. All rights reserved.</p>
    </div>
  )
}

export default CoupangSignIn;