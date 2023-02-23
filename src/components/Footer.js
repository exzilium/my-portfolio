import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white mt-5">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#c71610" }}
            href="mailto:caseyjdwyer@gmail.com"
            role="button"
          >
            <MDBIcon fas icon="envelope" />{" "}
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/caseydwyer/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/exzilium"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
          <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="https://www.facebook.com/caseyd6/"
        role="button"
      >
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
        </section>
      </MDBContainer>



      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          {" "}Casey Dwyer{" "}
        </a>
      </div>
    </MDBFooter>
  );
}
