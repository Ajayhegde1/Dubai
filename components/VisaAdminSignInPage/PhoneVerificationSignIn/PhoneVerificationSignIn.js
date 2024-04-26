"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
export function PhoneVerificationSignIn() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="w-[100vw] flex justify-center mt-[15vh]">
      <div className="border shadow-xl  h-auto w-[90%] xl:w-[30vw] 2xl:w-[30vw] lg:w-[20vw] md:w-[30vw] rounded-[12px] py-[2vh] px-[6vw] lg:px-[2vw] md:px-[2vw] xl:px-[2vw] 2xl:px-[2vw]">
        <div className=" w-full  items-center space-y-[5vh]">
          <div className="w-full flex flex-col items-center space-y-[1vh]">
            <p className="text-[24px] text-black font-[700] ">
              Visa Admin Login
            </p>

            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <div className="">
            <Form
              name="admin-signin-form"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Link href="/V1/VisaAdminPage">
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Sign In
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
