"use client";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import WordReveal, {
  AnimatedCard,
  Animation,
  LeftAnimation,
  RightAnimation,
} from "../../../components/ui/Animation";
import aienvironment from "../../../assets/services/aienvironment.svg";
import whatwereceivebackground from "../../../assets/services/whatwereceive.svg";
import airedteaming from "../../../assets/services/ai-redteaming.png";
import Image from "next/image";
import FAQSection from "../../../components/sections/FAQSection";

import { aiAugamented } from "../../../services/api/contact";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import Link from "next/link";

interface ContactFormData {
  email: string;
  orgname: string;
  phonenumber: string;
  country: string;
  aifootprint: string;
  turnstileToken: string;
}

const whyRedTeamDifferent = [
  {
    heading: "AI as the Target",
    subheading: "Attack the systems behind AI.",
    description:
      "Test models, datasets, ML pipelines, and inference environments for supply-chain and integrity risks.",
  },
  {
    heading: "AI as the Attack Surface",
    subheading: "Manipulate what AI can see and do.",
    description:
      "Test prompt injection, jailbreaks, instruction extraction, tool-call hijacking, and excessive agency.",
  },
  {
    heading: "AI as the Weapon",
    subheading: "Use AI to amplify the attack.",
    description:
      "Simulate controlled deepfake vishing, AI-enabled social engineering, and accelerated reconnaissance.",
  },
];

const redTeamTesting = [
  {
    title: "LLM-Powered Products",
    description:
      "Customer-facing or internal products built on LLMs, exposed to direct prompt injection and jailbreak attempts.",
    Icon: "tabler:message-chatbot",
  },
  {
    title: "AI Agents",
    description:
      "Agents with email, code execution, or payment tool-calling capability that could be hijacked into unintended actions",
    Icon: "ic:baseline-support-agent",
  },
  {
    title: "ML / MLOps",
    description:
      "Teams operating model-training or inference pipelines, model registries, & CI/CD integrations vulnerable to supply chain attacks",
    Icon: "akar-icons:data",
  },
  {
    title: "Finance & Treasury",
    description:
      "Organizations where wire transfer or credential reset approvals depend on voice or video confirmation from executives",
    Icon: "mingcute:currency-rupee-line",
  },
  {
    title: "Security & Blue Teams",
    description:
      "SOC teams that need to validate whether their monitoring catches AI-native attack patterns or treats them as background noise",
    Icon: "ic:round-security",
  },
  {
    title: "Executive & Board Teams",
    description:
      "Leadership seeking a measurable view of AI exposure and threat readiness.",
    Icon: "akar-icons:people-group",
  },
];

const enagement = [
  {
    number: "01",
    Icon: "bx:layer",
    moduleName: "MODULE A",
    title: "AI Supply Chain Attack Simulation",
    subtitle: "Compromise the pipeline.",
    description:
      "Test the integrity of your AI/ML supply chain and whether malicious models, datasets or insecure configurations can enter your environment.",
    keyFocus: "Models · Datasets · Credentials · ML Pipelines",
  },
  {
    number: "02",
    Icon: "tabler:message-chatbot",
    moduleName: "MODULE B",
    title: "LLM & Agent Red Teaming",
    subtitle: "CHALLENGE THE MODEL. CONTROL THE AGENT.",
    description:
      "Test LLM-powered applications and agents for weaknesses that could allow attackers to bypass safeguards or manipulate business actions.",
    keyFocus: "Prompt Injection · Jailbreaks · Tool Calling · Excessive Agency",
  },
  {
    number: "03",
    Icon: "ic:outline-settings-voice",
    moduleName: "MODULE C",
    title: "Deepfake Vishing / BEC",
    subtitle: "SIMULATE THE VOICE.TEST THE TRUST.",
    description:
      "Run controlled, consent-based deepfake voice or video simulations to test whether finance, operations, & executive workflows can resist AI-enabled impersonation.",
    keyFocus: "Voice Cloning · Impersonation · Approval Workflows",
  },
  {
    number: "04",
    Icon: "mdi:target",
    moduleName: "MODULE D",
    title: "AI-Accelerated Recon",
    subtitle: "MEASURE THE SPEED OF THEAI-DRIVEN ATTACKER.",
    description:
      "Compare AI-assisted reconnaissance with manual testing to measure speed, coverage, and attack-surface discovery.",
    keyFocus: "Discovery · Enumeration · Attack Surface · AI vs Manual",
  },
];

const securityChecks = [
  {
    flow: "Guardrail Response Consistency",
    test: "Whether the LLM's safety guardrails respond consistently across repeated or rephrased prompts",
    security:
      "Guardrail bypass via rephrasing, encoding tricks, multi-turn erosion",
  },
  {
    flow: "Tool-Call Authorization Enforcement",
    test: "Whether tool/function-calling permissions are correctly scoped per agent role and session",
    security:
      "Privilege escalation via tool-call chaining, unauthorized tool invocation",
  },
  {
    flow: "Human-in-the-Loop Approval Gates",
    test: "Whether high-risk actions (payments, data deletion, external sends) correctly pause for human approval",
    security:
      "Approval-gate bypass, silent auto-approval under load or ambiguity",
  },
  {
    flow: "Credential Scoping for Processing Workers",
    test: "Whether ML pipeline workers hold least-privilege cloud/cluster credentials",
    security:
      "Over-scoped IAM roles, lateral movement from a compromised worker",
  },
  {
    flow: "Detection & Alerting Pipeline",
    test: "Whether automated, high-volume AI-driven actions trigger alerts or blend into normal traffic",
    security:
      "Alert-fatigue exploitation, sandbox-noise camouflage, delayed detection",
  },
  {
    flow: "Escalation Workflow",
    test: "Whether flagged anomalies are actually routed to and acted on by the right on-call team, across time zones",
    security:
      "Escalation-path gaps, stale contact lists, unacknowledged alerts",
  },
  {
    flow: "Out-of-Band Verification Protocol",
    test: "Whether finance/ops staff follow callback-on-known-number procedure for high-risk instructions",
    security: "Vishing compliance rate, protocol bypass under urgency",
  },
  {
    flow: "Model / Dataset Provenance Checks",
    test: "Whether the pipeline validates the source and integrity of models/datasets before ingestion",
    security: "Malicious model/dataset injection, unsigned artifact acceptance",
  },
  {
    flow: "Session / Context Isolation",
    test: "Whether one user's or tenant's conversation context can leak into or influence another's session",
    security: "Cross-session context leakage, memory/context poisoning",
  },
  {
    flow: "Error Handling & Fallback Logic",
    test: "Agent/pipeline behavior under malformed input, timeouts, and partial failures",
    security:
      "Verbose error disclosure, unsafe fallback defaults, stack trace exposure",
  },
];

const ourApproaches = [
  {
    title: "Scope and Authorize",
    description:
      "Define the target environment, objectives, rules of engagement, staging boundaries, and legal requirements. Select the AI attack modules relevant to your environment.",
  },
  {
    title: "Reconnaissance",
    description:
      "Map your AI footprint across models, repositories, inference endpoints, agents, exposed services, and ML pipelines to identify potential attack paths.",
  },
  {
    title: "Execute the Attack",
    description:
      "Run the selected attack simulations across AI supply chains, LLMs and agents, human workflows, or AI-accelerated reconnaissance within the agreed scope.",
  },
  {
    title: "Validate Detection",
    description:
      "Test whether attacks are detected, alerted, investigated, and escalated effectively, working with your Blue Team where required.",
  },
  {
    title: "Report & Prioritize",
    description:
      "Document attack paths, evidence, security gaps, severity, and business impact with clear remediation recommendations.",
  },
  {
    title: "Retest & Verify",
    description:
      "Validate remediation through targeted retesting and confirm that identified weaknesses have been effectively addressed.",
  },
  {
    title: "Executive Insight",
    description:
      "Deliver an executive-ready view of AI threat exposure, attack outcomes, control effectiveness, and prioritized next steps.",
  },
];

const whatWeReceive = [
  {
    title: "Attack Narrative",
    description:
      "A step-by-step view of how the simulated attack unfolded, including entry points, attack paths, key actions, and outcomes.",
  },
  {
    title: "Technique Validation",
    description:
      "A clear pass/fail view across tested techniques, supported by evidence, severity ratings, & observed control behavior.",
  },
  {
    title: "Human Exposure",
    description:
      "Results from controlled deepfake vishing or BEC simulations, including susceptibility findings and supporting evidence.",
  },
  {
    title: "AI Recon Comparison",
    description:
      "A comparison of AI-assisted and manual reconnaissance across discovery speed, coverage, and attack-surface visibility.",
  },
  {
    title: "Remediation Roadmap",
    description:
      "Prioritized, developer-friendly recommendations mapped directly to the vulnerabilities, & attack paths identified.",
  },
  {
    title: "Executive / Board Summary",
    description:
      "A concise view of AI exposure, material findings, control effectiveness, business impact, and recommended next steps.",
  },
];

const ourDifferentiators = [
  {
    Icon: "akar-icons:people-group",
    title: "CERT-In Empanelled Team",
    description:
      "Delivered by the same CERT-In empanelled team behind our VAPT & RTaaS practice.",
  },
  {
    Icon: "hugeicons:ai-background-eraser",
    title: "AI/ML Specialists",
    description:
      "Specialists focused on AI supply chain, LLM, and agent security testing.",
  },
  {
    Icon: "grommet-icons:code-sandbox",
    title: "Functional + Security Testing",
    description:
      "Validate AI controls for both functionality and resistance to real-world attacks.",
  },
  {
    Icon: "lets-icons:covert",
    title: "Developer Remediation",
    description:
      "Use stealth methods to simulate insider and persistent threats.",
  },
  {
    Icon: "ant-design:ant-design-outlined",
    title: "Modular by Design",
    description:
      "Run individual attack modules or combine them for broader AI threat-readiness coverage.",
  },
  {
    Icon: "fa-solid:shield-alt",
    title: "ISO 27001:2022 Certified",
    description:
      "Secure, confidential engagement delivery with controlled access & structured processes.",
  },
  {
    Icon: "boxicons:globe-alt-3",
    title: "Global Coverage",
    description:
      "Remote and on-site engagements across India, US, UK, Europe, GCC, Singapore, & Australia.",
  },
];

const aiRedTeamAssessmentFAQs = [
  {
    question: "What is AI-Augmented Red Team testing?",
    answer:
      "AI-Augmented Red Team testing simulates attack paths where AI systems are the target, the weapon, or both. It covers AI supply chain attack simulation against ML pipelines, LLM/agent red teaming including prompt injection and jailbreaks, deepfake-based vishing and BEC simulation, and AI-accelerated recon benchmarking - going beyond traditional network and human-focused red teaming.",
  },
  {
    question:
      "Does ISECURION deliver AI-Augmented Red Team engagements outside India?",
    answer:
      "Yes. ISECURION delivers AI-Augmented Red Team engagements globally, including the United States, United Kingdom, Europe, the GCC (UAE, Saudi Arabia, Qatar), Singapore, and Australia, through a mix of remote engagement and on-site delivery, coordinated across time zones by a dedicated engagement lead.",
  },
  {
    question: "How is this different from a traditional red team engagement?",
    answer:
      "Traditional red teams test human and network attack paths - phishing, network pivoting, physical access. AI-Augmented Red Team specifically tests AI-native attack surfaces: ML training/inference pipelines, LLM guardrails and tool-calling agents, and AI-generated social engineering like deepfake voice cloning.",
  },
  {
    question: "Can we run just one module, or do we need the full suite?",
    answer:
      "Each of the four modules - Supply Chain Attack Simulation, LLM/Agent Red Teaming, Deepfake Vishing/BEC Simulation, and AI-Accelerated Recon Benchmark - can be scoped and priced standalone. Bundling two or more modules earns a discount, and the full suite is available at a flat package price.",
  },
  {
    question:
      "Is the deepfake vishing simulation legal and ethical across jurisdictions?",
    answer:
      "Yes. Deepfake voice or video content is only created and used with documented consent from the impersonated individual, under signed rules of engagement tailored to local law in the client's jurisdiction, and destroyed after the engagement per agreed retention terms.",
  },
  {
    question:
      "How does this align with data protection rules like GDPR or DPDP?",
    answer:
      "Scoping and rules of engagement are adapted to the relevant data protection framework for the client's jurisdiction - including GDPR in Europe, DPDP in India, and equivalent frameworks in the GCC, Singapore, and Australia - so that test data handling, consent, and retention comply with local requirements.",
  },
  {
    question: "What is included in functional testing for this service?",
    answer:
      "Functional testing validates that your controls actually work as designed - guardrail response consistency, tool-call authorization enforcement, human-in-the-loop approval gates, credential scoping for processing workers, detection and alerting pipelines, escalation workflows, out-of-band verification protocols, model/dataset provenance checks, session isolation, and error handling. This runs alongside the attack simulation in every module.",
  },
  {
    question: "How long does a typical Red Team Assessment take?",
    answer:
      "Duration varies based on scope, but most assessments take 2-4 weeks, including planning, simulation, and reporting phases.",
  },
  {
    question: "How long does an AI-Augmented Red Team engagement take?",
    answer:
      "Standard engagements run 3-5 weeks depending on the number of modules selected and environment complexity, covering scoping, reconnaissance, execution, detection validation, and reporting - regardless of the client's location.",
  },
  {
    question: "How much does an AI-Augmented Red Team engagement cost?",
    answer:
      "Pricing depends on the modules selected and your environment complexity, and is quoted in your local currency on request. Contact ISECURION at +91-88612 01570 or info@isecurion.com for a customized, module-by-module quote with bundling discounts available.",
  },
];

function AiAugamentedRedTeam() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ContactFormData>();

  // this is the api calling
  const submit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await aiAugamented({ ...data, turnstileToken });
      if (response.status === 200) {
        toast.success(response.message);
        reset();
        setTurnstileToken("");
        turnstileRef.current?.reset();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#060D1B]">
      {/* this is the hero section  */}
      <section className="relative py-14  min-h-[calc(100dvh-110px)] 2xl:min-h-[70vh] flex items-center overflow-hidden bg-[#000000]">
        <div className="absolute top-0 left-30 w-[650px] h-[600px] blur-[140px] rounded-full pointer-events-none opacity-80 bg-[#E24B4A]/30 "></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex gap-8 sm:gap-15 flex-col lg:flex-row">
          {/* left  */}
          <div className="w-full lg:flex-1 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="text-base font-semibold sectionheading text-[#E24B4A] ">
              AI-AUGMENTED RED TEAM
            </p>
            <h1
              className=" text-[#FFFFFF] animate-hero-reveal"
              style={{ animationDelay: "600ms" }}
            >
              AI-Augmented Red Team Services
            </h1>

            <div className="text-center lg:text-left">
              <p
                className="text-base sm:text-[17px] font-medium leading-[26px] sm:leading-[32px]  text-[#D1D1D1] animate-hero-reveal"
                style={{ animationDelay: "750ms" }}
              >
                ISECURION’s AI-Augmented Red Team tests AI supply chains, LLMs,
                agents, deepfake-driven social engineering, and AI-accelerated
                reconnaissance.
              </p>
              <p
                className="text-base sm:text-lg leading-7.5 md:leading-8 text-[#D1D1D1] animate-hero-reveal"
                style={{ animationDelay: "950ms" }}
              >
                Delivered by CERT-In empanelled AI/ML security specialists
                across global environments, remotely or on-site, as a standalone
                engagement or VAPT/RTaaS add-on.
              </p>
            </div>
            <p
              className="text-base sm:text-lg text-[#0F66EA] max-w-[450px] leading-8 animate-hero-reveal"
              style={{ animationDelay: "1000ms" }}
            >
              LLM Security · AI Agents · AI Supply Chain · Deepfake Vishing
            </p>
            <div className="flex gap-4">
              {/* <Link href="/company/contact">
              <button className="text-[15px] font-medium px-4 py-3 flex items-center gap-3 rounded-[10px] cursor-pointer text-[#31435C] bg-[#FFFFFF]">
                Get AI Red Team Quote{" "}
                <span>
                  <Icon icon="akar-icons:arrow-right" />
                </span>
              </button>
              </Link> */}
              <Link href="tel:+918861201570" target="_blank">
                <button
                  className="mt-4 text-[15px] font-medium px-4 py-3 flex items-center gap-3 rounded-[10px] cursor-pointer text-[#FFFFFF] border border-[#FFFFFF]/16 animate-hero-reveal"
                  style={{ animationDelay: "1200ms" }}
                >
                  <span>
                    <Icon icon="flowbite:outgoing-call-outline" />
                  </span>
                  {""}
                  Talk to Us
                </button>
              </Link>
            </div>
          </div>
          {/* right  */}
          <div className="w-full lg:flex-1 rounded-3xl  px-7 py-8 bg-[#202123]">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF]">
                Request AI-Augmented Red Team Consultation
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#D9D9D9]">
                Share your AI footprint and get a tailored quote within 24
                hours.
              </p>
            </div>
            <div className="mt-5">
              <form className="space-y-4" onSubmit={handleSubmit(submit)}>
                {/* work email + org name  */}
                <div className="flex flex-col sm:flex-row gap-5 ">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-medium text-[#FEFEFE]"
                    >
                      Work Email <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      className={`text-sm font-normal px-3 py-3  rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.email ? "border border-red-500" : "border-[1.14px] border-[#262D3D] "}`}
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm font-normal  text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-medium text-[#FEFEFE]"
                    >
                      Organization / Product Name{" "}
                      <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product name"
                      className={`text-sm font-normal px-3 py-3  rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.orgname ? "border border-red-500" : "border-[1.14px] border-[#262D3D] "}`}
                      {...register("orgname", {
                        required: "Oraganization name is required",
                      })}
                    />
                    {errors.orgname && (
                      <p className="text-sm font-normal text-red-500">
                        {errors.orgname.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* phone number +country  */}
                <div className="flex flex-col sm:flex-row gap-5 ">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-medium text-[#FEFEFE]"
                    >
                      Phone Number <span className="text-[#E42F23]"> *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 987-654-321"
                      className={`text-sm font-normal px-3 py-3  rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.phonenumber ? "border border-red-500" : "border-[1.14px] border-[#262D3D] "}`}
                      {...register("phonenumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers are allowed",
                        },
                      })}
                    />
                    {errors.phonenumber && (
                      <p className="text-sm font-normal text-red-500">
                        {errors.phonenumber.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-medium text-[#FEFEFE]"
                    >
                      Country <span className="text-[#E42F23]"> *</span>
                    </label>
                    <select
                      name=""
                      id=""
                      className={`text-sm font-normal px-3 py-3  rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.country ? "border border-red-500" : "border-[1.14px] border-[#262D3D] "}`}
                      {...register("country", {
                        required: "Country is required",
                      })}
                    >
                      <option value="">Region / Country</option>

                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Europe (Other)">Europe (Other)</option>
                      <option value="UAE">UAE</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar / Other GCC">
                        Qatar / Other GCC
                      </option>
                      <option value="Singapore">Singapore</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="text-sm font-normal text-red-500">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Ai foot print  */}
                <div className="flex flex-col sm:flex-row ">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor=""
                      className="text-sm font-medium text-[#FEFEFE]"
                    >
                      AI Footprint <span className="text-[#E42F23]"> *</span>
                    </label>
                    <select
                      name=""
                      id=""
                      className={`text-sm font-normal px-3 py-3 w-full rounded-[10px] outline-none text-[#D1D1D1]  bg-[#0A0303] ${errors.aifootprint ? "border border-red-500" : "border-[1.14px] border-[#262D3D] "}`}
                      {...register("aifootprint", {
                        required: "Ai Foot print is required",
                      })}
                    >
                      <option value="">Select your AI Footprint</option>

                      <option value="United States">United States</option>
                      <option value="LLM-Powered Chatbot / Copilot">
                        LLM-Powered Chatbot / Copilot
                      </option>
                      <option value="AI Agent with Tool/Function-Calling Access">
                        AI Agent with Tool/Function-Calling Access
                      </option>
                      <option value="ML Training / Inference Pipeline">
                        ML Training / Inference Pipeline
                      </option>
                      <option value="Enterprise Exposed to Deepfake Fraud Risk">
                        Enterprise Exposed to Deepfake Fraud Risk
                      </option>
                      <option value="Full Suite - All Modules">
                        Full Suite - All Modules
                      </option>
                      <option value="Not Sure - Need a Consultation">
                        Not Sure - Need a Consultation
                      </option>
                    </select>
                    {errors.aifootprint && (
                      <p className="text-sm font-normal text-red-500">
                        {errors.aifootprint.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="max-w-[300px] overflow-hidden flex flex-col gap-2">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => setTurnstileToken("")}
                  />
                </div>
                <div className="flex gap-5">
                  <input
                    type="checkbox"
                    required
                    className="appearance-auto not-checked:appearance-none w-4 h-4 rounded-sm shrink-0 cursor-pointer  text-white border-[1.4px] border-[#D1D1D1] bg-[#202123] "
                  />{" "}
                  <p className="text-xs font-medium leading-[22px] text-[#D1D1D1]">
                    By clicking submit below, you agree to our Terms of Use and
                    Privacy Policy. Additionally, you consent to allow ISECURION
                    Technology & Consulting Pvt. Ltd. to store and process the
                    personal information submitted above to provide you the
                    content requested.
                  </p>
                </div>
                <button
                  type="submit"
                  className={`flex items-center gap-3 w-full px-4 py-3 justify-center rounded-[10px] text-[#FFFFFF] bg-linear-to-r from-[#3263B1] via-[#29559D] to-[#1C3D70] ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                >
                  Get My AI Red Team Quote{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AI has Changed the Attack Surface.  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row justify-between gap-10">
          <LeftAnimation>
            <div className="lg:w-[500px] space-y-4 text-center lg:text-left ">
              <p className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
                WHY AI-AUGMENTED RED TEAMING MATTERS
              </p>
              <WordReveal
                text="AI has Changed the Attack Surface."
                className=" text-[#FFFFFF]"
              ></WordReveal>
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <p className="sectionDescription text-[#D1D1D1]">
                  Traditional Red Teaming focuses on people, networks,
                  identities, and endpoints. AI introduces new attack paths
                  across models, datasets, prompts, agents, connected tools, and
                  human workflows.
                </p>
                <p className="sectionDescription text-[#D1D1D1]">
                  AI-Augmented Red Teaming tests these pathways to determine how
                  AI can be targeted, manipulated, or weaponized, and whether
                  your existing controls can detect and stop the attack. {""}
                </p>
                <div className="mt-2 h-[3px] w-[104px] rounded-[3px] bg-[#E24B4A]"></div>
              </div>
              <div className="space-y-2 flex flex-col items-center lg:items-start">
                <p className="text-base  font-medium flex items-center gap-2 mt-8 text-[#E24B4A]">
                  TARGET{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>{" "}
                  MANIPULATE{" "}
                  <span>
                    <Icon icon="akar-icons:arrow-right" />
                  </span>{" "}
                  WEAPONIZE
                </p>
                <p className="text-base sm:text-lg text-[#D1D1D1]">
                  Test the attack path. Validate the control. Strengthen the
                  defense.
                </p>
              </div>
            </div>
          </LeftAnimation>
          <div className="lg:-[490px]">
            <h3 className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
              WHY AI-AUGMENTED RED TEAM IS DIFFERENT
            </h3>
            <div className="space-y-10 mt-6">
              {whyRedTeamDifferent.map((item, index) => (
                <AnimatedCard key={index} className="flex gap-4">
                  <div className="w-[9px]  rounded-2xl bg-linear-to-r from-[#0F66EA] to-[#BFBFBF]"></div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg  font-medium text-[#FFFFFF]">
                      {item.heading}
                    </h3>
                    <p className="text-sm sm:text-base  font-medium text-[#BFBFBF]">
                      {item.subheading}
                    </p>
                    <p className="text-sm sm:text-base font-medium max-w-md mt-3 leading-[28px]  text-[#D1D1D1]">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading  */}

          <Animation>
            <div className="max-w-xl mx-auto lg:mx-0 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
                OUR CLIENTS
              </p>
              <WordReveal
                text="Who Needs AI-Augmented Red Team Testing?"
                className=" text-[#FFFFFF]"
              ></WordReveal>
              <p className="sectionDescription text-[#D1D1D1]">
                AI-Augmented Red Teaming is designed for organizations where AI
                connects to products, data, infrastructure, business processes,
                or decision-making.
              </p>
            </div>
          </Animation>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {redTeamTesting.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.12}
                className="relative px-5 py-3 space-y-3 rounded-lg border border-[#0B15301F] bg-[#66666614]"
              >
                <div className="absolute left-0 h-[23px] w-[2px] bg-[#E24B4A]"></div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                    {item.title}
                  </h3>
                  <Icon icon={item.Icon} className="text-3xl text-[#E24B4A]" />
                </div>
                <p className="text-sm sm:text-base font-normal leading-[24px] text-[#D1D1D1]">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Four Attack Paths. One AI Threat-Readiness View */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* heading */}
          <Animation>
            <div className="flex flex-col lg:flex-row items-center gap-10 ">
              <div className="w-full lg:w-[400px] space-y-4 text-center lg:text-left  justify-between">
                <p className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
                  ENGAGEMENT STRUCTURE
                </p>
                <WordReveal
                  text="Four Attack Paths. One AI Threat-Readiness View"
                  className="font-medium leading-[40px] md:leading-[55px] text-[#FFFFFF]"
                ></WordReveal>
                <p className="sectionDescription text-[#D1D1D1]">
                  Run one module or combine multiple attack paths based on your
                  AI environment and objectives.
                </p>
              </div>
              <div className=" flex-1  ">
                <Image src={aienvironment} alt="Ai environment" />
              </div>
            </div>
          </Animation>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {enagement.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.15}
                  className="pl-4 border-l border-[#0F66EA29]"
                >
                  <p className="text-sm sm:text-base font-medium flex gap-3 text-[#F4F7FF]">
                    <span className="text-[#E24B4A]">{item.number}</span>{" "}
                    {item.moduleName}
                  </p>
                  <div className="mt-4">
                    <div className="flex gap-5">
                      <div className="w-[48px] h-[48px] flex items-center justify-center shrink-0 rounded-xl bg-[#8D8D8D57]">
                        <Icon
                          icon={item.Icon}
                          className="text-xl text-[#FFFFFF]"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-[#F5F0E8]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium h-[30px] mt-4 leading-[20px] uppercase text-[#0F66EA]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs font-normal mt-7 h-[85px] leading-[21px]  text-[#D1D1D1D6]">
                      {item.description}
                    </p>
                    <div className="h-[3px] w-[64px] mt-4 mb-4 rounded-[3px] bg-[#4E4E4E]"></div>
                    <p className="text-xs font-medium text-[#0F66EA]">
                      KEY FOCUS
                    </p>
                    <p className="text-xs font-normal mt-4 mb-4 leading-[21px] text-[#D1D1D1D6]">
                      {item.keyFocus}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From AI Supply Chain to Human Defense */}
      {/* <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            <div className="lg:w-[500px] text-center lg:text-left space-y-4">
              <p className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
                TESTING COVERAGE
              </p>
              <h2 className=" text-[#FFFFFF]">
                From AI Supply Chain to Human Defense
              </h2>
            </div>
            <p className="lg:w-[500px] text-center lg:text-left sectionDescription text-[#D1D1D1]">
              End-to-end attack simulation and functional validation across the
              AI attack surface.
            </p>
          </div>
        </div>
      </section> */}

      {/* FUNCTIONAL TESTING  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <Animation>
            <div className="text-center space-y-4">
              <p className="text-sm sm:text-base font-semibold uppercase sectionheading text-[#E24B4A]">
                Functional Testing
              </p>
              <WordReveal
                text="AI-Augmented Red Team Functional Testing - What We Validate"
                className=" max-w-2xl mx-auto  text-white"
              ></WordReveal>
              <p className="sectionDescription max-w-3xl mx-auto text-[#D1D1D1]">
                Attack simulation alone isn't enough, we validate whether your
                controls, gates, and detection pipelines actually function as
                designed.
              </p>
            </div>
          </Animation>

          <div className="w-full overflow-x-auto mt-10">
            <Animation>
              <div className="min-w-[900px] flex flex-col border border-white/10 bg-[#030816] ">
                {/* Header */}
                <div className="grid grid-cols-[1.6fr_3.2fr_2.4fr_0.8fr] ">
                  {[
                    "Functional Flow",
                    "What We Test",
                    "Security Checks",
                    "Included",
                  ].map((title, i) => (
                    <div
                      key={title}
                      className={`bg-[#071329] border border-white/20 px-4 py-3 text-[13px] font-medium text-[#E5E5E5] ${
                        i === 3 ? "text-center" : ""
                      }`}
                    >
                      {title}
                    </div>
                  ))}
                </div>

                {securityChecks.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1.6fr_3.2fr_2.4fr_0.8fr] "
                  >
                    <div className="flex items-center bg-[#1F5555] border border-[#3B82B6]/60 px-4 py-3 text-[13px] font-semibold leading-snug text-white">
                      {item.flow}
                    </div>

                    <div className="flex items-center bg-[#F5EAD5] px-4 py-3 text-[13px] leading-snug text-[#1A1A1A]">
                      {item.test}
                    </div>

                    <div className="flex items-center bg-[#F5EAD5] px-4 py-3 text-[13px] leading-snug text-[#1A1A1A]">
                      {item.security}
                    </div>

                    <div className="flex items-center justify-center bg-[#00001A] border border-white/10 text-white">
                      <Icon icon="material-symbols:check" className="text-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </Animation>
          </div>
        </div>
      </section>

      {/* OUR APPROACH  */}
      <section className="w-full py-14 bg-[#060D1B]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 sm:px-10 gap-8 lg:gap-15">
          <div className="w-full lg:w-[40%] ">
            <LeftAnimation>
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
                  OUR APPROACH
                </p>
                <h2 className=" text-[#FFFFFF]">
                  Proven AI-Augmented Red Team Methodology
                </h2>
                <p className="sectionDescription text-[#D1D1D1]">
                  A structured process applied consistently across all four
                  modules, adapted to your region's legal and regulatory
                  context.
                </p>
              </div>
            </LeftAnimation>
          </div>
          <div className="flex-1">
            <div className="relative mt-8">
              <div className="absolute top-0 bottom-0 border-l-[3px] border-[#152329] shadow-[inset_3px_0_4px_0_#FFFFFFCF]"></div>
              <div className="space-y-8">
                {ourApproaches.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.15}
                    className="flex gap-10"
                  >
                    <div className="relative w-0">
                      <div className="absolute top-0 -left-[9px] w-[20px] h-[20px] rounded-full border border-[#FFFFFF] bg-[#E24B4A]" />
                    </div>
                    <div className="flex gap-10 items-start">
                      <div>
                        <p className="text-base font-semibold text-[#E24B4A]">
                          0{index + 1}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-[#FEFEFE]">
                          {item.title}
                        </h3>
                        <p className="text-sm font-normal leading-[23px] text-[#D1D1D1]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE  */}
      <section
        className="relative w-full py-14"
        style={{ backgroundImage: `url(${whatwereceivebackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          {/* heading  */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-sm sm:text-base font-semibold sectionheading text-[#E24B4A]">
              WHAT YOU RECEIVE
            </p>
            <WordReveal
              text="Complete AI-Augmented Red Team Deliverables"
              className="font-medium text-[#FFFFFF]"
            ></WordReveal>
            <p className="sectionDescription text-[#D1D1D1]">
              Technical depth for your engineering team, and a clear narrative
              for your board, in your local currency and time zone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {whatWeReceive.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.12}
                className="space-y-3"
              >
                <div className="h-[11px] w-[58px] rounded-2xl bg-linear-to-l from-[#E24B4A] to-[#6D758F]"></div>
                <h3 className="text-base sm:text-base lg:text-lg font-medium text-[#FFFFFF]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-[17.44px] font-normal leading-[28px] text-[#D1D1D1]">
                  {item.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DIFFERENTIATORS  */}
      <section className="relative w-full mt-12  pb-14">
        <div className="relative w-full min-h-[60vh] pt-14 pb-48 overflow-hidden">
          <div className="absolute inset-0 opacity-76">
            <Image
              src={airedteaming}
              alt="AI red teaming"
              fill
              sizes="100vw"
              className="object-cover "
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 h-[400px]">
            <div className="flex">
              <div className="flex-2 hidden lg:block" />
              <div className="flex-1 ">
                <RightAnimation>
                  <div className="text-center lg:text-left space-y-4">
                    <p className="text-sm sm:text-base font-semibold uppercase sectionheading text-[#E24B4A]">
                      Our Differentiators
                    </p>
                    <h2 className=" max-w-sm mx-auto lg:mx-0 text-white">
                      Built for the AI Attack Surface
                    </h2>
                    <p className="sectionDescription lg:max-w-sm text-[#D1D1D1]">
                      AI-focused offensive security backed by specialist
                      expertise, functional validation, and a global delivery
                      model.
                    </p>
                  </div>
                </RightAnimation>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 -mt-70">
          <div className="rounded-2xl border border-white/30 border-b-2 border-b-[#E24B4A] bg-linear-to-b from-[#202123AD] to-[#090B21] backdrop-blur-md px-6 sm:px-10 py-10 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
              {ourDifferentiators.map((item, index) => (
                <AnimatedCard
                  delay={index * 0.12}
                  key={index}
                  className="space-y-4 w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.9rem)]"
                >
                  <div className="relative w-[40px] h-[40px]">
                    <Icon
                      icon={item.Icon}
                      className="relative z-10 text-3xl text-[#E24B4A]"
                    />
                    <div className="absolute bottom-[2px] right-[5px] w-[21px] h-[21px] rounded-full bg-[#4A4A4A]" />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-medium text-[#F5F0E8]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-6 text-[#D1D1D1D6]">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            Frequently Asked Questions -
            <br className="hidden sm:block" />
            AI-Augmented Red Team
          </>
        }
        description="Common questions from security and engineering teams across the United States, Europe, GCC, Singapore, Australia, and India"
        faqs={aiRedTeamAssessmentFAQs}
      />
    </div>
  );
}

export default AiAugamentedRedTeam;
