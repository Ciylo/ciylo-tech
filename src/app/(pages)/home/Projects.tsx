import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";

export default function OurProjects() {
  return (
    <>
      <section className="2xl:pb-16 md:pt-10 pt-4 md:pb-16 pb-8 2xl:px-0 md:px-16 px-6">
        <div className="container mx-auto">
          <h5 className="md:text-[48px] text-[28px] mb-6 md:mb-12 font-semibold text-center text-[#000000] leading-none">
            Our Featured{" "}
            <span className="text-[#00C9A7] font-bold">Projects</span>.
          </h5>
          {/* --------------------- */}
          <div className="grid md:grid-cols-2 grid-cols-1 md:mb-8 mb-6 md:gap-8 gap-6">
            <div className="border relative h-full items-end justify-end border-[#E0E0E0] flex md:flex-row flex-col gap-4 bg-white rounded-3xl md:pt-12 pt-6 ps-6 ">
              <div className="flex justify-between h-full flex-col">
                <div className="shrink-0">
                  <h6 className="md:text-[32px] text-xl mb-4 font-bold text-[#212121]">
                    Pharmaceutical
                  </h6>
                  <p className="md:text-sm text-xs  text-[#616161] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien.
                  </p>
                  <div className="md:absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! md:text-[16px] text-base! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" 2xl:w-[303px] md:w-[200px] w-[150px] shrink-0 2xl:h-[320px] md:h-[200px] h-[150px]">
                <img
                  src="/images/undraw_medical-care_7m9g (1) 1.svg"
                  alt="Project 1"
                  className="size-full"
                />
              </div>
            </div>
            <div className="border relative h-full border-[#E0E0E0] flex md:flex-row flex-col items-end justify-end gap-4 bg-white rounded-3xl md:pt-12 pt-6 ps-6 ">
              <div className="flex justify-between h-full flex-col">
                <div>
                  <h6 className="md:text-[32px] text-xl mb-4 font-bold text-[#212121]">
                    Oil Industry
                  </h6>
                  <p className="md:text-sm text-xs  text-[#616161] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien.
                  </p>
                  <div className="md:absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! md:text-[16px] text-base! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" 2xl:w-[360px] md:w-[200px] w-[150px] shrink-0 2xl:h-[300px] md:h-[200px] h-[150px]">
                <img
                  src="/images/pipe_pipeline-20.svg"
                  alt="Project 1"
                  className="size-full"
                />
              </div>
            </div>
          </div>
          {/* --------------------- */}
          <Row gutter={[32,24]}>
            <Col md={8} xs={24}>
            <div className="border bg-[url('/images/pipeline_pipeline-12.svg')]  relative h-full border-[#E0E0E0] bg-white rounded-3xl md:pt-12 pt-6 ps-6 ">
                <div>
                  <h6 className="md:text-[32px] text-xl mb-4 font-bold text-[#212121]">
                  100+ <br/> industries
                  </h6>
                 
                  <div className="md:absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! md:text-[16px] text-base! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                </div>
              </div>
            </div>
            </Col>
            <Col md={16} xs={24}>
            <div className="border relative  h-full border-[#E0E0E0] flex md:flex-row flex-col items-end justify-end gap-4 bg-white rounded-3xl md:pt-12 pt-6 ps-6 ">
              <div className="flex justify-between h-full flex-col">
                <div>
                  <h6 className="md:text-[32px] text-xl mb-4 font-bold text-[#212121]">
                  Health Care
                  </h6>
                  <p className="md:text-sm text-xs  text-[#616161] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                  </p>
                  <div className="md:absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! md:text-[16px] text-base! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" 2xl:w-[510px] md:w-[200px] w-[150px] shrink-0 2xl:h-[340px] md:h-[200px] h-[150px]">
                <img
                  src="/images/undraw_medicine_hqqg 1.svg"
                  alt="Project 1"
                  className="size-full"
                />
              </div>
            </div>
            </Col>
          </Row>
          <div className="flex justify-center md:pt-12 pt-6">
            <Button
              href="/industries"
              icon={<Icon icon="formkit:arrowright" />}
              iconPlacement="end"
              type="default"
              className="main-btn md:mt-3 rounded-full! md:text-lg text-base! font-semibold!"
            >
              View All Industries
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
