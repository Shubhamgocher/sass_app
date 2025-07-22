import CompanionsCard from "@/components/CompanionsCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular companions</h1>
      <section className="home-section">
        <CompanionsCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration="45"
          color="#E5D0FF"
        />
        <CompanionsCard
          id="2"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration="30"
          color="#FFDA6E"
        />
        <CompanionsCard
          id="3"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="Language"
          duration="30"
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList title="Recently completed lessons" companions={recentSessions} classname="w-2/3 max-md:w-full"/>
        <Cta />
      </section>
    </main>
  );
};

export default Page;
