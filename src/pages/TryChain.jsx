import React, { useState, createRef } from "react";
import {
  Container,
  Dimmer,
  Loader,
  Grid,
  Sticky,
  Message,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { SubstrateContextProvider, useSubstrate } from "../substrate-lib";
import { DeveloperConsole } from "../substrate-lib/components";

import AccountSelector from "../components/AccountSelector";
// import Interactor from './Interactor'
import ContentSubmission from "../components/ContentSubmission";
// import Participants from "../components/Balances";
import SignUpUser from "../components/SignUpUser";
// import TemplateModule from "./TemplateModule";
import ContentToReview from "../components/ContentToReview";
import ObjectiveClaimsToReview from "../components/ObjectiveClaimsToReview";

function TryChain() {
  const [accountAddress, setAccountAddress] = useState(null);
  const { apiState, keyring, keyringState, apiError } = useSubstrate();
  const accountPair =
    accountAddress &&
    keyringState === "READY" &&
    keyring.getPair(accountAddress);

  // This is a temporary boolean to track whether the user is "Signed up", for us until we have a sign up extrinsic fully in place
  const [isUsersignedUp, setisUsersignedUp] = useState(false);

  const loader = (text) => (
    <Dimmer active>
      <Loader size="small">{text}</Loader>
    </Dimmer>
  );

  const message = (err) => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header="Error Connecting to Substrate"
          content={`${JSON.stringify(err, null, 4)}`}
        />
      </Grid.Column>
    </Grid>
  );

  if (apiState === "ERROR") return message(apiError);
  else if (apiState !== "READY") return loader("Connecting to Substrate");

  if (keyringState !== "READY") {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    );
  }

  return (
    <section className="bg-dark12 py-8">
      <div>
        <Container className="container bg-gray-900 text-gray-600 max-w-7xl m-8 p-10 mx-auto md:flex rounded-xl">
          <Grid stackable columns="equal">
            {/* <Grid.Row stretched>
            <Participants />
          </Grid.Row> */}

            <Grid.Row>
              <Grid.Column>
                <SignUpUser
                  accountPair={accountPair}
                  cb={() => setisUsersignedUp(true)}
                  show={isUsersignedUp}
                />
              </Grid.Column>
              <Grid.Column>
                <AccountSelector setAccountAddress={setAccountAddress} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <ContentSubmission
                accountPair={accountPair}
                cb={() => setisUsersignedUp(true)}
                show={isUsersignedUp}
              />
            </Grid.Row>

            <Grid.Row>
              <ContentToReview accountPair={accountPair} />
            </Grid.Row>

            <Grid.Row>
              <ObjectiveClaimsToReview accountPair={accountPair} />
            </Grid.Row>

            {/* <Grid.Row>
            <TemplateModule accountPair={accountPair} />
          </Grid.Row> */}
          </Grid>
        </Container>
        <DeveloperConsole />
      </div>
    </section>
  );
}

export default TryChain;
