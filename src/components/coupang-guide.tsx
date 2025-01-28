import { useState } from "react";
import CoupanButton from "./coupang-button";
import CoupangCheck from "./coupang-checkbox";
import CoupangLogo from "./coupang-logo";

function CoupangGuide() {
  const [loginKeep, setLoginKeep] = useState<boolean>(false);

  const handleLoginKeep = () => {
    setLoginKeep(!loginKeep);
  }

  return (
    <>
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
      </div>
      <h2>Checkbox &amp; Radio</h2>
      <CoupangCheck label="자동로그인" checked={loginKeep} onChecked={handleLoginKeep} />
      <CoupangCheck label="자동로그인" checked disabled />
    </>
  )
}

export default CoupangGuide;