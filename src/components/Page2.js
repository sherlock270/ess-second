import React, { useState } from "react";
import "../second.css";

export default function Page2() {
  function HideAllShowOne(d) {
    // Between the quotation marks, list the id values of each div.
    let IDvaluesOfEachDiv = "idone idtwo";
    //-------------------------------------------------------------
    console.log(IDvaluesOfEachDiv);
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g, " ");
    console.log(IDvaluesOfEachDiv);
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/, "");
    console.log(IDvaluesOfEachDiv);
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/, "");
    console.log(IDvaluesOfEachDiv);
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g, " ");
    console.log(IDvaluesOfEachDiv);
    let IDlist = IDvaluesOfEachDiv.split(" ");

    for (let i = 0; i < IDlist.length; i++) {
      HideContent(IDlist[i]);
    }
    ShowContent(d);
  }

  function HideContent(d) {
    document.getElementById(d).style.display = "none";
  }

  function ShowContent(d) {
    document.getElementById(d).style.display = "block";
  }

  //   function ReverseDisplay(d) {
  //     if (document.getElementById(d).style.display === "none") {
  //       document.getElementById(d).style.display = "block";
  //     } else {
  //       document.getElementById(d).style.display = "none";
  //     }
  //   }

  return (
    <div id="esscontainer" className="esscontainer_shadow">
      <div id="ess-wrapper">
        <div id="ess-block">
          <div className="ess-toptitle">
            <h1 className="second-h1">AS 17.37 Medical Uses of Marijuana</h1>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Resources</button>
            <div className="dropdown-content" style={{ right: 0 }}>
              <a href="#" target="_blank">
                Alaska Statute 17.37 Medical Uses of Marijuana
              </a>
              <a href="#" target="_blank">
                Alaska Statute 17.38 The Regulation of Marijuana
              </a>
              <a href="#" target="_blank">
                3 AAC 306 Regulations for the Marijuana Control Board
              </a>
              <a href="#" target="_blank">
                Marijuana Handler Permit Application Instructions
              </a>
            </div>
          </div>
          <div className="ess-content">
            <h3>Checking IDs Exercise</h3>
            <p>
              Examine ID to determine whether or not you would sell to the
              customer.{" "}
            </p>
            <div className="center">
              <img
                src="https://i.imgur.com/zE5tOlu.jpg"
                width="400"
                height="250"
                alt=""
              />
              <ul className="doit second-ul">
                <span className="green">
                  <li>
                    <a onClick={() => HideAllShowOne("idone")}>SELL</a>
                  </li>
                </span>
                <li>
                  <a onClick={() => HideAllShowOne("idtwo")}>DON&apos;T SELL</a>
                </li>
              </ul>
            </div>
            <div id="idone" className="expired" style={{ display: "none" }}>
              <strong>Incorrect.</strong>
              <br />
              The correct answer is:
              <br />
              <span className="red">
                <strong>DON&apos;T SELL</strong>
              </span>
              <br />
              This license has some bumps and scratches indicating that it may
              have been tampered with. It&apos;s expired.{" "}
              <div className="close">
                <a onClick={() => HideContent("idone")}>
                  <strong>X</strong>
                </a>
              </div>
            </div>
            <div id="idtwo" className="expired" style={{ display: "none" }}>
              <strong>Congratulations.</strong> <br />
              The correct answer is:
              <br />
              <span className="red">
                <strong>DON&apos;T SELL</strong>
              </span>
              <br />
              This license has some bumps and scratches indicating that it may
              have been tampered with. It&apos;s expired.
              <div className="close">
                <a onClick={() => HideContent("idtwo")}>
                  <strong>X</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
