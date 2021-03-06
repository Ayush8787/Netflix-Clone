import React from "react";
import { OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { AccordionContainer } from "../containers/accordion";
import { FeatureContainer } from "../containers/feature";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <FeatureContainer>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </FeatureContainer>
      </HeaderContainer>

      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
