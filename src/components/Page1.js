import React, { useState } from "react";
import "../second.css";

export default function Page1() {
  function HideAllShowOne(d) {
    // Between the quotation marks, list the id values of each div.
    let IDvaluesOfEachDiv = "idone idtwo";
    //-------------------------------------------------------------
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g, " ");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/, "");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/, "");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g, " ");
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
  //     if (document.getElementById(d).style.display == "none") {
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
            <h1 className="second-h1">Knowledge Check: Exercise</h1>
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
            <h1 className="second-h1">KNOWLEDGE CHECK</h1>
            <p>Click on each word to review its definition</p>
            <ul className="definitions second-ul">
              <li>
                <a onClick={() => HideAllShowOne("idone")} className="def_btn">
                  Consumer
                </a>
              </li>
              <div
                id="idone"
                style={{ display: "none" }}
                className="answerbtns"
              >
                A person 21 years of age or older who purchases marijuana or
                marijuana products for personal use by persons 21 years of age
                or older, but not for resale to others.
                <div className="close">
                  <a onClick={() => HideContent("idone")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a onClick={() => HideAllShowOne("idtwo")} className="def_btn">
                  Consumption
                </a>
              </li>
              <div
                id="idtwo"
                style={{ display: "none" }}
                className="answerbtns"
              >
                The act of ingesting, inhaling, or otherwise introducing
                marijuana into the human body.
                <div className="close">
                  <a onClick={() => HideContent("idtwo")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a
                  onClick={() => HideAllShowOne("idthree")}
                  className="def_btn"
                >
                  Marijuana
                </a>
              </li>
              <div
                id="idthree"
                style={{ display: "none" }}
                className="answerbtns"
              >
                All parts of the plant of the genus cannabis whether growing or
                not, the seeds thereof, the resin extracted from any part of the
                plant, and every compound, manufacture, salt, derivative,
                mixture, or preparation of the plant, its seeds, or its resin,
                including marijuana concentrate. Marijuana does not include
                fiber produced from the stalks, oil, or cake made from the seeds
                of the plant, sterilized seed of the plant which is incapable of
                germination, or the weight of any other ingredient combined with
                marijuana to prepare topical or oral administrations, food,
                drink, or other products.
                <div className="close">
                  <a onClick={() => HideContent("idthree")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a onClick={() => HideAllShowOne("idfour")} className="def_btn">
                  Marijuana Accessories
                </a>
              </li>
              <div
                id="idfour"
                style={{ display: "none" }}
                className="answerbtns"
              >
                Any equipment, products, or materials of any kind which are
                used, intended for use, or designed for use in planting,
                propagating, cultivating, growing, harvesting, composting,
                manufacturing, compounding, converting, producing, processing,
                preparing, testing, analyzing, packaging, repackaging, storing,
                vaporizing, or containing marijuana, or for ingesting, inhaling,
                or otherwise introducing marijuana into the human body.
                <div className="close">
                  <a onClick={() => HideContent("idfour")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a onClick={() => HideAllShowOne("idfive")} className="def_btn">
                  Marijuana Cultivation Facility
                </a>
              </li>
              <div
                id="idfive"
                style={{ display: "none" }}
                className="answerbtns"
              >
                A marijuana cultivation facility, a marijuana testing facility,
                a marijuana product manufacturing facility, or a retail
                marijuana store.
                <div className="close">
                  <a onClick={() => HideContent("idfive")}>X</a>
                </div>{" "}
              </div>
            </ul>
            <ul className="definitions second-ul">
              <li>
                <a onClick={() => HideAllShowOne("idsix")} className="def_btn">
                  Marijuana Establishment
                </a>
              </li>
              <div
                id="idsix"
                style={{ display: "none" }}
                className="answerbtns"
              >
                A marijuana cultivation facility, a marijuana testing facility,
                a marijuana product manufacturing facility, or a retail
                marijuana store.
                <div className="close">
                  <a onClick={() => HideContent("idsix")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a
                  onClick={() => HideAllShowOne("idseven")}
                  className="def_btn"
                >
                  Marijuana Product Manufacturing Facility
                </a>
              </li>
              <div
                id="idseven"
                style={{ display: "none" }}
                className="answerbtns"
              >
                An entity registered to purchase marijuana; manufacture,
                prepare, and package marijuana products; and sell marijuana and
                marijuana products to other marijuana product manufacturing
                facilities and to retail marijuana stores, but not to consumers.
                <div className="close">
                  <a onClick={() => HideContent("idseven")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a
                  onClick={() => HideAllShowOne("ideight")}
                  className="def_btn"
                >
                  Marijuana Products
                </a>
              </li>
              <div
                id="ideight"
                style={{ display: "none" }}
                className="answerbtns"
              >
                Concentrated marijuana products and marijuana products that are
                comprised of marijuana and other ingredients and are intended
                for use or consumption, such as, but not limited to, edible
                products, ointments, and tinctures.
                <div className="close">
                  <a onClick={() => HideContent("ideight")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a onClick={() => HideAllShowOne("idnine")} className="def_btn">
                  Marijuana Testing Facility
                </a>
              </li>
              <div
                id="idnine"
                style={{ display: "none" }}
                className="answerbtns"
              >
                An entity registered to analyze and certify the safety and
                potency of marijuana.
                <div className="close">
                  <a onClick={() => HideContent("idnine")}>X</a>
                </div>{" "}
              </div>
              <li>
                <a onClick={() => HideAllShowOne("idten")} className="def_btn">
                  Retail Marijuana Store
                </a>
              </li>
              <div
                id="idten"
                style={{ display: "none" }}
                className="answerbtns"
              >
                An entity registered to purchase marijuana from marijuana
                cultivation facilities, to purchase marijuana and marijuana
                products from marijuana product manufacturing facilities, and to
                sell marijuana and marijuana products to consumers. <br />
                <br />
                <div className="close">
                  <a onClick={() => HideContent("idten")}>X</a>
                </div>{" "}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
