import { useState } from "react";
import CoupangCheck from "./coupang-checkbox";
import CoupangInput from "./coupang-input";
import CoupangLogo from "./coupang-logo";
import CoupanButton from "./coupang-button";

function CoupangSignIn() {
  const [loginKeep, setLoginKeep] = useState<boolean>(false);

  const handleLoginKeep = () => {
    setLoginKeep(!loginKeep);
  }

  return (
    <div className="coupang-wrap">
      <div className="logo">
        <CoupangLogo />
      </div>
      <form action="">
        <div className="input-form-wrap">
          <CoupangInput label="아이디(이메일)" type="email" />
          <CoupangInput label="비밀번호" type="password" />
        </div>
        <div className="login-option">
          <CoupangCheck label="자동로그인" checked={loginKeep} onChecked={handleLoginKeep} />
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