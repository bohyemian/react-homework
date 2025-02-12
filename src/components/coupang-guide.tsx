import { useState } from "react";
import CoupanButton from "./coupang-button";
import CoupangCheck from "./coupang-checkbox";
import CoupangLogo from "./coupang-logo";
import CoupangInput from "./coupang-input";

function CoupangGuide() {
  const [loginKeep, setLoginKeep] = useState<boolean>(false);

  const handleLoginKeep = () => {
    setLoginKeep(!loginKeep);
  }

  return (
    <div className="wrap">
      <h3>Logo</h3>
      <div className="logo" style={{display: 'flex', columnGap: 24}}>
        <CoupangLogo width={180} />
        <CoupangLogo width={180} color="mono" />
        <CoupangLogo width={180} color="black" />
      </div>

      <h3>Button</h3>
      <div className="btn-wrap" style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'flex-start', rowGap: 12}}>
        <CoupanButton className="primary" />
        <CoupanButton />
        <CoupanButton className="primary" disabled />
        <CoupanButton disabled />
        <a href="/" className="btn-arrow">
          <span>아이디(이메일)/비밀번호 찾기</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={11} height={18} viewBox="0 0 11 18" fill="none">
            <path d="M1.5 1L9.5 9L1.5 17" stroke="#0074E9" strokeWidth={2} />
          </svg>
        </a>
      </div>
      <h3>Input Field</h3>
      <CoupangInput label="아이디(이메일)" type="email" />
      <CoupangInput label="비밀번호" type="password" />
      <h3>Checkbox &amp; Radio</h3>
      <CoupangCheck label="자동로그인" checked={loginKeep} onChecked={handleLoginKeep} />
      <CoupangCheck label="자동로그인" checked disabled />
    </div>
  )
}

export default CoupangGuide;