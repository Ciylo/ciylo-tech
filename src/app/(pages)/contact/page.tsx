"use client";

import React from "react";
import { Col, Row, Form, Input, Button, Radio } from "antd";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section>
      <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-15 md:py-10 py-8">
        {/* main text start here */}
        <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-6 md:mb-16 mb-10">
          <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
              <span className="text-xs font-bold text-black">Contact Us</span>
            </div>
            <h5 className="text-[36px] 2xl:text-[96px]   font-semibold text-[#000000]">
              
              Let&apos;s Build <br />
              <span className="text-[#00C9A7] font-bold! "> Your Idea</span>
            </h5>
          </div>
        </div>
        {/* contact form start here */}
        <Row gutter={[52, 24]} className="flex flex-col md:flex-row">
          <Col md={12} xs={24} className="order-2 md:order-1">
            <div className="flex flex-col gap-6 md:gap-8 2xl:gap-12 bg-[#00C9A7] w-full p-6 md:p-8 2xl:p-10 rounded-2xl md:rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 py-4 md:py-6 2xl:py-10 h-[200px] md:h-[300px] 2xl:h-[400px] opacity-20 md:opacity-30">
                <Image
                  src="/images/ciylo-icon.svg"
                  alt="Contact Info"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <h6 className="text-xl md:text-2xl 2xl:text-3xl font-bold">
                  Contact Information
                </h6>
                <p className="text-sm md:text-base">
                  Say something to start a live chat!
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 2xl:gap-12 relative z-10">
                <div className="flex items-center gap-4 md:gap-6">
                  <Icon
                    icon="mdi:phone"
                    className="text-xl md:text-2xl shrink-0"
                  />
                  <div className="text-sm md:text-base">+923016475925</div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <Icon
                    icon="mdi:email"
                    className="text-xl md:text-2xl shrink-0"
                  />
                  <div className="text-sm md:text-base wrap-break-word">
                  noraiz@ciylo.com
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <Icon
                    icon="ci:location"
                    className="text-xl md:text-2xl shrink-0 mt-1"
                  />
                  <div className="text-sm md:text-base">
                  17 J3 johar town <br />
                    Lahore Pakistan
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} xs={24} className="order-1 md:order-2">
            <Form
              layout="vertical"
              onFinish={(values) => {
                console.log("Form values:", values);
              }}
              className="w-full"
              initialValues={{
                country: "Pakistan",
                subject: "Mobile development",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your first name",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      variant="borderless"
                      className="border-0 border-b border-gray-300 rounded-none"
                      style={{
                        borderBottom: "1px solid #d1d5db",
                        borderRadius: 0,
                      }}
                      placeholder="First Name"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      variant="borderless"
                      className="border-0 border-b border-gray-300 rounded-none"
                      style={{
                        borderBottom: "1px solid #d1d5db",
                        borderRadius: 0,
                      }}
                      placeholder="Last Name"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      size="large"
                      type="email"
                      variant="borderless"
                      className="border-0 border-b border-gray-300 rounded-none"
                      style={{
                        borderBottom: "1px solid #d1d5db",
                        borderRadius: 0,
                      }}
                      placeholder="Email"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={[
                      { required: true, message: "Please enter your country" },
                    ]}
                  >
                    <Input
                      size="large"
                      variant="borderless"
                      className="border-0 border-b border-gray-300 rounded-none"
                      style={{
                        borderBottom: "1px solid #d1d5db",
                        borderRadius: 0,
                      }}
                      placeholder="Country"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div className="mb-6">
                <h6 className="text-base md:text-lg font-bold mb-4">
                  Select Subject?
                </h6>
                <Form.Item
                  name="subject"
                  rules={[
                    { required: true, message: "Please select a subject" },
                  ]}
                >
                  <Radio.Group className="contact-radio flex flex-wrap gap-3 md:gap-4">
                    <Radio
                      value="Mobile development"
                      className="text-sm md:text-base"
                    >
                      Mobile development
                    </Radio>
                    <Radio value="Website" className="text-sm md:text-base">
                      Website
                    </Radio>
                    <Radio value="Ai websites" className="text-sm md:text-base">
                      Ai websites
                    </Radio>
                    <Radio
                      value="General Inquiry"
                      className="text-sm md:text-base"
                    >
                      General Inquiry
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <Form.Item
                name="projectDescription"
                label="Project Description"
                rules={[
                  {
                    required: true,
                    message: "Please enter your project description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  variant="borderless"
                  className="border-0 border-b border-gray-300 rounded-none"
                  style={{ borderBottom: "1px solid #d1d5db", borderRadius: 0 }}
                  placeholder="Write your message.."
                />
              </Form.Item>
              <Form.Item className="mb-0">
                <div className="flex justify-center md:justify-end">
                  <Button
                    type="default"
                    htmlType="submit"
                    className="md:min-w-[247px]! h-[56px]! main-btn rounded-full! w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
}
