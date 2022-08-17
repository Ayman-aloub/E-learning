import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            E-learning,Inc. is the data controller of the personal information we collect about you (i.e., the entity that determines the means and purposes of collecting, using, and disclosing the personal information).
We use your personal information for the purposes set out in the "How We Use the Information" section of this Privacy Notice below, including providing our site and Services to you, ensuring the security and performance of our site, conducting research relating to Content Offerings, sharing information with our Content Providers and our suppliers, direct marketing, and performing statistical analysis of the use of our site and Services.
You have a number of rights that you can exercise in relation to our use of your personal information, as set out in the "Updating or Deleting Your Personally Identifiable Information" section of this Privacy Notice below.
You have a number of rights that you can exercise in relation to our use of your personal information, as set out in the "Updating or Deleting Your Personally Identifiable Information" section of this Privacy Notice below.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
