import FormInput from "./formInput";
import FormButton from "./formButton";

function SignUp() {
  return (
    <form action="">
      <FormInput label="이름" placeholder="2글자 이상 입력" />
      <FormInput type="password" label="이메일" placeholder="user@company.io" />
      <FormInput type="password" label="패스워드" placeholder="숫자, 영문 조합 6자리 이상 입력" />
      <FormInput type="password" label="패스워드 확인" placeholder="입력한 패스워드 다시 입력" />
      <FormButton type="submit">회원가입</FormButton>
    </form>
  )
}

export default SignUp;