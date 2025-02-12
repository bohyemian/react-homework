import FormButton from "./formButton";
import FormInput from "./formInput";

function SignIn() {
  return (
    <div className="wrap">
      <form action="">
        <FormInput label="이메일" placeholder="user@company.io" />
        <FormInput label="패스워드" placeholder="숫자, 영문 조합 6자리 이상 입력" />
        <FormButton type="submit">로그인</FormButton>

      </form>
    </div>
  )

}

export default SignIn;