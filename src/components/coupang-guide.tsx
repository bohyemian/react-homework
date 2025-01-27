import CoupanButton from "./coupang-button";
import CoupangLogo from "./coupang-logo";

function CoupangGuide() {
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
    </>
  )
}

export default CoupangGuide;