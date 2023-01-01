import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("data :::: ", data);

  console.log("watch(example) ::: ", watch("example"));

  return <div>SignUp</div>;
};

export default SignUp;

// 핸드폰 번호
// 비밀번호
// 아이디
// 이메일
// 이미지
// 주소
// 성별(라디오 버튼)
