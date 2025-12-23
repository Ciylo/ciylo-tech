import OurClients from "@/components/-webComponents/OurClients";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { Icon } from "@iconify/react";
import GetStarted from "@/components/-webComponents/GetStarted";
export default function HowWorkPage() {
  const sprintSteps = [
    {
      title: "1. Sprint planning",
      description:
        "The team gathers to identify the backlog (a set of tasks from the product backlog), while also estimating the effort required for their implementation.",
    },
    {
      title: "2. Implementation",
      description:
        "Based on the set goals, the product's functionality is coded and deployed to the staging environment for further testing, following a well-structured test plan.",
    },
    {
      title: "3. Progress tracking",
      description:
        "To synchronise the team's activities and ensure everyone is aware of progress, obstacles, and next steps, we have brief meetings (usually 15 minutes).",
    },
    {
      title: "4. Sprint demo",
      description:
        "At the end of each sprint, the team demonstrates the completed work to stakeholders. Feedback is collected, setting the stage for the next sprints.",
    },
    {
      title: "5. Sprint retrospective",
      description:
        "The team reflects on the sprint, discussing what went well and areas for improvement. This ensures each sprint is more efficient than the last.",
    },
  ];
  
  const goodCore = [
    {
      title: 'Transform your product concept into a well-defined roadmap',
      btnText: 'Product Discovery',
      btnLink: '/solution/discovery',
    },
    {
      title: 'Select a partnership model that aligns with your needs',
      btnText: 'Engagement models',
      btnLink: '/about',
    },
    {
      title: 'Get a glimpse into the potential price ranges for your bespoke app',
      btnText: 'Bespoke software pricing',
      btnLink: '/about',
    },
    {
      title: 'Everything you ever wanted to know about GoodCore',
      btnText: 'FAQ',
      btnLink: '/about',
    }
  ];

  return (
    <>
      <section>
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-15 md:py-10 py-8">
          <div className="flex flex-col 2xl:gap-14 md:gap-10 gap-4">
            <div className="flex flex-col 2xl:gap-7 md:gap-5 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
                <span className="2xl:text-xs md:text-sm text-xs font-bold text-black">How we Work</span>
              </div>
              <h5 className="2xl:text-[66px] md:text-5xl text-4xl font-semibold text-[#000000] leading-none">
                {" "}
                How we
                <span className="text-[#00C9A7] font-bold! "> Work</span>
              </h5>
            </div>

            <div className="flex 2xl:max-w-4xl md:max-w-2xl justify-between max-w-full md:gap-0 gap-4">
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1 md:gap-2">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">200+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Projects Shipped</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#00C9A7] h-full flex flex-col gap-1 md:gap-2">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">6+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Years Running</span>
              </div>
              <div className="w-1/3 md:border-l-4 border-l-2 2xl:ps-7 ps-4 border-[#434343] h-full flex flex-col gap-1 md:gap-2">
                <span className="2xl:text-[40px] md:text-2xl text-xl font-normal text-[#434343]">50+</span>
                <span className="2xl:text-xs md:text-sm text-xs text-[#4B5563]">Happy Clients</span>
              </div>
            </div>

            <p className="2xl:text-2xl md:text-xl text-base 2xl:leading-relaxed md:leading-relaxed leading-normal font-light text-[#000000]">
              A software company that turns ambitious ideas into <br className="2xl:block md:block hidden" />{" "}
              scalable, user-centered digital products. <br className="2xl:block md:block hidden" /> No fluff, just
              results.
            </p>
          </div>
        </div>
      </section>
      <OurClients />
      {/* ------------- */}
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-12">
        <div className="container mx-auto">
          <Row gutter={[32, 24]} justify="space-between">
            <Col md={10} xs={24}>
              <div className="flex flex-col md:gap-8 gap-4">
                <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#212125]">
                  01. Initial consultation
                </h6>
                <p className="2xl:text-[22px] md:text-xl text-base font-normal text-[#212125]">
                  This is where we deep-dive into your vision, laying the
                  groundwork for a strong partnership. Through dynamic
                  brainstorming sessions, we&apos;ll uncover your goals,
                  challenges, and resource considerations. Armed with these
                  insights, we&apos;ll craft a tailored project proposal for
                  you.&apos;
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Preliminary discussions
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  During consultations, we delve into your business objectives
                  and challenges. We focus on:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>Core requirements for your product</li>
                  <li>Project documentation and stakeholder availability</li>
                  <li>Resource limitations</li>
                </ul>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Project proposal
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  After discussing all aspects of the project internally with
                  our solution teams, we will create a detailed project
                  proposal. It will cover:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>The project&apos;s scope</li>
                  <li>Team structure</li>
                  <li>Technology recommendations</li>
                  <li>Estimated timeline and budget</li>
                </ul>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Contract signing
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Finally, we refine the proposal to ensure it aligns seamlessly
                  with your vision and expectations.
                </p>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Once all project specifics are agreed upon, the next step
                  involves formalising our commitment through the signing of a
                  Master Service Agreement (MSA).
                </p>
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 24]} justify="space-between" className="md:mt-16 mt-8">
            <Col md={10} xs={24}>
              <div
                className="flex flex-col md:pt-7 pt-4 gap-2"
                style={{
                  borderTopWidth: "4px",
                  borderTopStyle: "solid",
                  borderImage: "linear-gradient(to right, #50FFE1, #00C9A7) 1",
                }}
              >
                <h6 className="text-lg font-medium text-[#212125]">
                  Concerned about confidentiality?
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Even before you share detailed project information, you can
                  sign a Non-Disclosure Agreement (NDA) with us ensuring all
                  discussions remain private.
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div
                className="flex flex-col md:pt-7 pt-4 gap-2"
                style={{
                  borderTopWidth: "4px",
                  borderTopStyle: "solid",
                  borderImage: "linear-gradient(to right, #50FFE1, #00C9A7) 1",
                }}
              >
                <h6 className="text-lg font-medium text-[#212125]">
                  Concerned about your intellectual property rights?
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  With GoodCore, your concepts, ideas, and innovations are
                  always protected and belong to you. While this may not be
                  standard everywhere, for us, it&apos;s non-negotiable.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 border border-[#D0DDE880] bg-[#C0F6ED40]">
        <div className="container flex flex-col md:flex-row justify-between  items-start  2xl:gap-0 gap-6 mx-auto">
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Deliverables:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Signed NDA</li>
              <li>Team structure</li>
              <li>Indicative timeline</li>
              <li>Signed MSA</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Key professionals involved:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Account manager</li>
              <li>Business analyst</li>
              <li>Technical architect</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Duration of the initiation stage:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>7 - 10 days (varies depending on the client)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-12 relative">
        <div className="container mx-auto">
          <Row gutter={[32, 24]} justify="space-between">
            <Col md={10} xs={24}>
              <div className="flex flex-col md:gap-8 gap-4">
                <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#212125]">
                  02. Discovery
                </h6>
                <p className="2xl:text-[22px] md:text-xl text-base font-normal text-[#212125]">
                  At this stage, we work in collaboration with you to shape your
                  idea into a well-planned and practical strategy, unlocking
                  both business and user value for an optimal investment.
                  Together, we map out the technical solution, along with
                  estimated resources needed to turn your project into reality.
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Understanding your vision and goals
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Building on the initial discussions, we dig deeper to
                  comprehend your product vision and address specific business
                  challenges. This includes:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>
                    Analysing your business processes and industry context
                  </li>
                  <li>Outlining strategic goals and KPIs for the project</li>
                </ul>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Identify obstacles and risks
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Through risk assessment, we pinpoint potential challenges,
                  constraints, and bottlenecks that might be encountered during
                  the project to adjust the roadmap and make sure we have a
                  correct risk mitigation strategy in place.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Gathering requirements
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  After strategically analysing your business workflows or
                  competitor products, we refine our understanding of your
                  envisioned product. Engaging stakeholders, we prioritise and
                  document both functional and non-functional requirements.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Visualising your idea
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Once we understand the vision and background of your software
                  idea, we move on to the next step - visualising the idea. This
                  includes:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>Wireframing</li>
                  <li>UI/UX design</li>
                  <li>Prototyping</li>
                </ul>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Architecting a technical solution
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Leveraging our insights, we craft the technical solution:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>
                    We provide expert guidance on decisions regarding costs and
                    future-proofing
                  </li>
                  <li>
                    Collaboratively, we decide on architecture, database design,
                    technology stack, and third-party integrations
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Architecting a technical solution
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  We consolidate gathered information for budgeting and
                  planning, including:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>Prioritising product features</li>
                  <li>Resource breakdown</li>
                  <li>Estimated timeline with critical milestones</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="absolute top-[25%] left-0 z-[-1] ">
          <Image
            src="/images/newgrid.svg"
            alt="newgrid"
            width={406}
            height={700}
            className="w-[150px] h-[150px]  md:w-[406px] md:h-[500px]"
            style={{ width: "auto", maxWidth: "100%" }}
          />
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 border border-[#D0DDE880] bg-[#C0F6ED40]">
        <div className="container flex flex-col md:flex-row justify-between  items-start 2xl:gap-0 gap-6 mx-auto">
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Deliverables:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Requirements document</li>
              <li>Risk assessment and mitigation plan</li>
              <li>Cost and timeline estimate</li>
              <li>Resource plan</li>
              <li>Project roadmap</li>
              <li>Solution architecture</li>
              <li>Technical solution</li>
              <li>Product prototypes</li>
              <li>UI/UX designs</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Key professionals involved:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Business analyst</li>
              <li>Technical architect</li>
              <li>UI/UX designer</li>
              <li>Project manager</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Duration of the discovery stage:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>
                2-8 weeks (depending on the size/complexity of the project)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="2xl:py-12 2xl:px-0 md:px-16 px-6 md:py-12 py-8 bg-[#00C9A7]">
        <div className="container flex flex-col md:flex-row justify-between  items-center 2xl:gap-0 gap-6 mx-auto">
          <h6 className="2xl:text-[32px] md:text-2xl text-xl font-medium text-[#FFFFFF]">
            Looking to validate your idea and link it with <br className="md:block hidden" /> technical
            execution?
          </h6>

          <Button
            type="primary"
            iconPlacement="end"
            icon={<Icon icon="formkit:arrowright" className="text-[#212125]" />}
            className="bg-[#FFFFFF]! uppercase! font-medium! rounded-md! h-11! text-[#212125]! hover:bg-[#FFFFFF]/80! hover:text-[#212125]!"
          >
            RUN DISCOVERY WITH Ciylo{" "}
          </Button>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8">
        <div className="container mx-auto">
          <Row gutter={[32, 24]} justify="space-between">
            <Col md={10} xs={24}>
              <div className="flex flex-col md:gap-8 gap-4">
                <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#212125]">
                  03. Development
                </h6>
                <p className="2xl:text-[22px] md:text-xl text-base font-normal text-[#212125]">
                  Now, with a deep grasp of your requirements, we begin building
                  your product. This phase focuses on coding, rigorous testing,
                  and transforming your concept into a tangible reality.
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Our Agile development approach
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  According to the Agile methodology, we break down the work
                  into manageable units called sprints, usually of two weeks
                  each. During each sprint, our team works to complete a set of
                  prioritized tasks from the project backlog. The product is
                  built incrementally, allowing you to see progress and provide
                  feedback. Once a sprint is over and its results are reviewed,
                  the team immediately plans the next.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Our project teams
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  As per our resource plan, we form a skilled team (including
                  mobile and web developers, UI/UX designers, QA specialists,
                  and DevOps engineers) for seamless product delivery. They work
                  simultaneously, minimising bottlenecks and streamlining
                  development. A project manager is also actively engaged,
                  ensuring smooth communication, task coordination, and timely
                  client requests handling.
                </p>
              </div>
            </Col>
          </Row>
          {/* ---------------------- Development Steps ---------------------- */}
          <div className="flex flex-col md:mt-12 mt-8 md:gap-8 gap-4">
            <div className="flex flex-col gap-4">
              <h6 className="2xl:text-2xl md:text-xl text-base font-medium text-[#212125]">
                What happens during each sprint?
              </h6>
              <p className="2xl:text-base md:text-base text-sm font-normal text-[#00C9A7]">
                Sprint: 14 days
              </p>
            </div>

            {/* Sprint steps timeline */}
            <div className="relative md:mt-4 mt-2">
              {/* dashed horizontal line for desktop */}
              <div className="hidden md:block absolute top-4 left-0 right-0 border-t-2 border-dashed border-[#50FFE1]" />

              <div className="flex flex-col md:flex-row md:justify-between md:gap-10 gap-4">
                {sprintSteps.map((step) => (
                  <div
                    key={step.title}
                    className="relative flex-1 flex flex-col items-start md:items-center text-left  gap-3"
                  >
                    <div className="hidden md:block z-1 w-5 h-5 mt-1.5 rounded-full bg-[#00C9A7]" />
                    <div className="flex flex-col gap-2 max-w-xs">
                      <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
                        {step.title}
                      </h6>
                      <p className="2xl:text-[14px] md:text-base text-sm font-normal text-[#212125]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 border border-[#D0DDE880] bg-[#C0F6ED40]">
        <div className="container flex flex-col md:flex-row justify-between  items-start 2xl:gap-0 gap-6 mx-auto">
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Deliverables:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Source code</li>
              <li>Test plan</li>
              <li>Test runs</li>
              <li>Database design</li>
              <li>Technical documentation</li>
              <li>Staging environment</li>
              <li>Production environment</li>
              <li>Data migration scripts (if any)</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Key professionals involved:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Project manager</li>
              <li>UI/UX designer</li>
              <li>Technical architect</li>
              <li>Software engineer</li>
              <li>QA engineers</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Duration of the development stage:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>6+ months</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 relative">
        <div className="container mx-auto">
          <Row gutter={[32, 24]} justify="space-between">
            <Col md={10} xs={24}>
              <div className="flex flex-col md:gap-8 gap-4">
                <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#212125]">
                  04. User acceptance testing (UAT)
                </h6>
                <p className="2xl:text-[22px] md:text-xl text-base font-normal text-[#212125]">
                  At GoodCore, we believe effective software addresses real
                  end-user needs and challenges. That&apos;s why our user
                  acceptance testing (UAT) phase mirrors real-world usage,
                  empowering end- users to validate the product and provide
                  valuable feedback for refinement. Your involvement is
                  essential throughout this process.
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Planning and preparation
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  We work with you to define the goals for UAT and create a
                  detailed test plan to focus on key software aspects like
                  features, functionalities and business processes. We also
                  guide your users to test the software in real-world
                  conditions, ensuring a comprehensive understanding of its
                  performance.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Setting up test environment
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  We set up a dedicated staging environment for UAT. The setup
                  closely replicates the actual production environment to ensure
                  authentic testing.
                </p>
              </div>

              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  UAT execution
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  During testing, we engage end-users, stakeholders, and
                  technical experts in scenario execution. Our structured
                  approach follows this process:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>Project managers provide software usage training</li>
                  <li>Your product owner coordinates participants</li>
                  <li>
                    Participants log observations for verification and
                    resolution
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Addressing feedback and closure
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  As feedback comes in, we follow a strategic process:
                </p>
                <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
                  <li>
                    Our developers prioritise and fix issues, redeploying the
                    application to the UAT environment
                  </li>
                  <li>Users confirm that reported issues are resolved</li>
                  <li>
                    You provide formal approval, signifying that the software
                    meets your acceptance criteria and is ready for production
                    deployment
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="absolute top-[25%] left-0 z-[-1] ">
          <Image
            src="/images/newgrid.svg"
            alt="newgrid"
            width={406}
            height={700}
            className="w-[150px] h-[150px]  md:w-[406px] md:h-[500px]"
            style={{ width: "auto", maxWidth: "100%" }}
          />
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 border border-[#D0DDE880] bg-[#C0F6ED40]">
        <div className="container flex flex-col md:flex-row justify-between  items-start 2xl:gap-0 gap-6 mx-auto">
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Deliverables:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>UAT plan</li>
              <li>User feedback report</li>
              <li>A product ready to go live</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Key professionals involved:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Project manager</li>
              <li>Software engineer</li>
              <li>QA engineers</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Duration of the development stage:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>
                2-6 weeks (depending on the scope and complexity of the project)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8">
        <div className="container mx-auto">
          <Row gutter={[32, 24]} justify="space-between">
            <Col md={10} xs={24}>
              <div className="flex flex-col md:gap-8 gap-4">
                <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#212125]">
                  05. Go-live
                </h6>
                <p className="2xl:text-[22px] md:text-xl text-base font-normal text-[#212125]">
                  This is the stage where the final product goes live. We ensure
                  a smooth transition from our staging environments to live
                  production systems.
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Live environment set up
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  We set up and optimise infrastructure like servers and
                  databases for deployment, configure specific settings and
                  permissions for the production environment, and implement
                  crucial security measures to protect the data and system.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Data migration (where applicable)
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Our team designs a step-by-step plan to transfer existing data
                  from old systems to the new one, ensuring data integrity and
                  consistency during the development phase. The plan is then
                  executed during go-live using data migration techniques,
                  specialised tools or scripts.
                </p>
              </div>

              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Deploy to production
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  The team deploys the software to the production environment.
                  As the software is deployed, the team stays on high alert,
                  closely monitoring the deployment process to detect and
                  address any issues.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Post-go-live review
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Following the deployment, our team conducts smoke testing to
                  validate the software&apos;s performance within the production
                  environment. These basic tests confirm that everything
                  functions as expected.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 border border-[#D0DDE880] bg-[#C0F6ED40]">
        <div className="container flex flex-col md:flex-row justify-between  items-start 2xl:gap-0 gap-6 mx-auto">
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Deliverables:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Software in live environment</li>
              <li>Additional documentation (if any)</li>
              <li>User manuals (if any)</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Key professionals involved:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>Project manager</li>
              <li>Technical architect</li>
              <li>DevOps engineer</li>
            </ul>
          </div>
          <div className="flex flex-col border-l-2 border-[#D0DDE8] ps-4 gap-4">
            <h6 className="2xl:text-lg md:text-base text-sm font-medium text-[#212125]">
              Duration of the development stage:
            </h6>
            <ul className="list-disc list-inside 2xl:text-base md:text-base text-sm flex flex-col gap-1 font-normal text-[#212125]">
              <li>2 - 3 days</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8">
        <div className="container mx-auto">
          <Row gutter={[32, 24]} justify="space-between">
            <Col md={10} xs={24}>
              <div className="flex flex-col md:gap-8 gap-4">
                <h6 className="2xl:text-[32px] md:text-2xl text-xl font-bold text-[#212125]">
                  06. Support
                </h6>
                <p className="2xl:text-[22px] md:text-xl text-base font-normal text-[#212125]">
                  At GoodCore, our relationship with you doesn&apos;s often end
                  once your software goes live. We provide post-deployment
                  technical support to enhance and maintain your software,
                  offering peace of mind and reliability. We understand that
                  bespoke software needs evolve, and we&apos;re here to ensure
                  it continues to meet your changing requirements and maximise
                  its positive impact on your processes.
                </p>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Periodic health checks
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  To guarantee long-term reliability, our engineers and
                  technical experts periodically assess the health of your
                  software. Evaluating system performance, database integrity,
                  and other key functionalities.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  Bug fixing & stabilisation
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  Even the best software can encounter unexpected issues. Our
                  team promptly addresses and resolves any bugs to ensure smooth
                  operations.
                </p>
              </div>

              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  User feedback implementation
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  We understand the value of user insights. By integrating their
                  feedback, we continually refine and enhance your software
                  experience.
                </p>
              </div>
              <div className="flex flex-col mb-2 gap-2">
                <h6 className="2xl:text-[24px] md:text-xl text-base font-medium text-[#212125]">
                  New features
                </h6>
                <p className="2xl:text-base md:text-base text-sm font-normal text-[#212125]">
                  As your needs evolve, so can your software. Whether it&apos;s
                  adding new features or scaling up, we&apos;re here to make
                  those transitions smooth.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="2xl:py-16 2xl:px-0 md:px-16 px-6 md:py-16 py-8 md:mb-0 mb-6 border border-[#D0DDE880] bg-[#C0F6ED40]">
        <div className="container mx-auto">
          <h6 className="2xl:text-[40px] md:text-3xl text-2xl font-semibold text-center 2xl:mb-16 md:mb-10 mb-8 text-[#212125]">
            More on GoodCore&apos;s processes
          </h6>
          <Row gutter={[32, 24]} justify="space-between">
            {goodCore.map((item, index) => (
              <Col md={6} xs={24} key={index}>
              <div className="bg-white p-4 flex h-full flex-col gap-4 items-start justify-between shadow-[0px_3px_6px_0px_#E1E1E1] rounded-lg">
                <h6 className="2xl:text-2xl md:text-xl text-base font-medium text-[#212125]">
                  {item.title}
                </h6>
                <Button
                  type="default"
                  href={item.btnLink}
                  iconPlacement="end"
                  icon={
                    <Icon icon="formkit:arrowright" className="text-white" />
                  }
                  className="bg-transparent! p-0! text-[16px]! font-normal! border-none! shadow-none! text-[#2092F4]! hover:text-[#00C9A7]! "
                >
                  {item.btnText}
                </Button>
              </div>
            </Col>
            ))}
          </Row>
        </div>
      </section>
      <GetStarted/>

    </>
  );
}