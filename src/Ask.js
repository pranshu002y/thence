import React from "react";
import "../src/ask.css";

const Ask = () => {
  return (
    <div className="ask">
    <div className="ask-content">
      <div className="ask-content-2">
        <div className="column">
          <div className="ask-column">
            <div className="ask-span">What’s on your mind</div>
            <div className="ask-span-2">Ask Questions</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cc5e7b4216b65142d8df19afb788c13f821474f7535d9b132f9d6643112ab3d?"
              className="img"
            />
          </div>
        </div>
        <div className="ask-column-2">
          <div className="content-1">
            <div className="content-2">
              <div className="span-column">Do you offer freelancers?</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56fd39032becb4b815e856c7212883b19a149411ae5cc377aba0408184411df?"
                className="img-2"
              />
            </div>
            <div className="container-questions"></div>
            <div className="q-1">
              <div className="span-ques">
                What’s the guarantee that I will be satisfied
                <br />
                with the hired talent?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56fd39032becb4b815e856c7212883b19a149411ae5cc377aba0408184411df?"
                className="img-3"
              />
            </div>
            <div className="container-questions"></div>
            <div className="q-1">
              <div className="span-ques">Can I hire multiple talents at once?</div>
              <div className="space-div"><div className="div-dark"></div></div>
            </div>
            <div className="small-text">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </div>
            <div className="container-questions"></div>
            <div className="q-1">
              <div className="span-ques">Why should I not go to an agency directly?</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56fd39032becb4b815e856c7212883b19a149411ae5cc377aba0408184411df?"
                className="img-4"
              />
            </div>
            <div className="container-questions"></div>
            <div className="q-1">
              <div className="span-ques">
                Who can help me pick a right skillset
                <br />
                and duration for me?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56fd39032becb4b815e856c7212883b19a149411ae5cc377aba0408184411df?"
                className="img-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Ask;
