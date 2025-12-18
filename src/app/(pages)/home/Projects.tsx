import { Icon } from "@iconify/react";
import { Button, Col, Row } from "antd";

export default function OurProjects() {
  return (
    <>
      <section className="2xl:py-16 md:py-16 py-12">
        <div className="container mx-auto">
          <h5 className="text-[48px] mb-12 font-semibold text-center text-[#000000] leading-none">
            Our Featured{" "}
            <span className="text-[#00C9A7] font-bold">Projects</span>.
          </h5>
          {/* --------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
            <div className="border relative h-full border-[#E0E0E0] flex gap-4 bg-white rounded-3xl pt-12 ps-6 ">
              <div className="flex justify-between h-full flex-col">
                <div>
                  <h6 className="text-[32px] mb-4 font-bold text-[#212121]">
                    Pharmaceutical
                  </h6>
                  <p className="text-sm  text-[#616161] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien.
                  </p>
                  <div className="absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[303px] shrink-0 h-[320px]">
                <img
                  src="/images/undraw_medical-care_7m9g (1) 1.svg"
                  alt="Project 1"
                  className="size-full"
                />
              </div>
            </div>
            <div className="border relative h-full border-[#E0E0E0] flex items-end justify-end gap-4 bg-white rounded-3xl pt-12 ps-6 ">
              <div className="flex justify-between h-full flex-col">
                <div>
                  <h6 className="text-[32px] mb-4 font-bold text-[#212121]">
                    Oil Industry
                  </h6>
                  <p className="text-sm  text-[#616161] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien.
                  </p>
                  <div className="absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[360px] shrink-0 h-[300px]">
                <img
                  src="/images/pipe_pipeline-20.svg"
                  alt="Project 1"
                  className="size-full"
                />
              </div>
            </div>
          </div>
          {/* --------------------- */}
          <Row gutter={[32,16]}>
            <Col md={8}>
            <div className="border bg-[url('/images/pipeline_pipeline-12.svg')]  relative h-full border-[#E0E0E0] bg-white rounded-3xl pt-12 ps-6 ">
                <div>
                  <h6 className="text-[32px] mb-4 font-bold text-[#212121]">
                  100+ <br/> industries
                  </h6>
                 
                  <div className="absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                </div>
              </div>
            </div>
            </Col>
            <Col md={16}>
            <div className="border relative  h-full border-[#E0E0E0] flex items-end justify-end gap-4 bg-white rounded-3xl pt-12 ps-6 ">
              <div className="flex justify-between h-full flex-col">
                <div>
                  <h6 className="text-[32px] mb-4 font-bold text-[#212121]">
                  Health Care
                  </h6>
                  <p className="text-sm  text-[#616161] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                  </p>
                  <div className="absolute bottom-6">
                    <Button
                      type="default"
                      iconPlacement="end"
                      icon={
                        <Icon
                          icon="formkit:arrowright"
                          className="text-white"
                        />
                      }
                      className="bg-transparent! p-0! text-[16px]! font-semibold! border-none! shadow-none! text-[#212121]! hover:text-[#00C9A7]! "
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[510px] shrink-0 h-[340px]">
                <img
                  src="/images/undraw_medicine_hqqg 1.svg"
                  alt="Project 1"
                  className="size-full"
                />
              </div>
            </div>
            </Col>
          </Row>
          <div className="flex justify-center pt-12">
            <Button
              icon={<Icon icon="formkit:arrowright" />}
              iconPlacement="end"
              type="default"
              className="main-btn mt-3 rounded-full! text-lg! font-semibold!"
            >
              View All Industries
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
