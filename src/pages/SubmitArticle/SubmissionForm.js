import React from 'react'

const SubmissionForm = ({prevStep, nextStep}) => {
  var wordLen = 255; // Maximum word length
         function checkWordLen(obj){
          var len = obj.value.split(/[\s]+/);
           if(len.length > wordLen){
               alert("You cannot put more than "+wordLen+" words in this text area.");
               obj.oldValue = obj.value!=obj.oldValue?obj.value:obj.oldValue;
               obj.value = obj.oldValue?obj.oldValue:"";
               return false;
           }
         return true;
       }
    const  continu = e => {
        nextStep();
      };
    
      const back = e => {
        prevStep();
      };
  return (
<div>
          <form action="" className="submission-form">
            <div className="full-name">
              <span>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="enter your first name" />
              </span>
              <span>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="enter your last name" />
              </span>
            </div>
            <div className="email-address">
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="enter your email address" />
            </div>
            <div className="title-of papaer">
              <label htmlFor="">Title of Paper</label>
              <input type="text" />
            </div>
            <div className="title-of papaer">
              <label htmlFor="">Abstract (max. 1000 words)</label>
              <textarea  type="text" rows="10" onchange="checkWordLen(this);" />
            </div>
            <div className="upload-article">
              <label htmlFor="">Upload your article</label>
              <input name="" type="file" id="formId" />
            </div>
          </form>
          <div className="submission-cta">
          <button  onClick={back}>Previous</button>
      <button onClick={continu}>Next</button>
          </div>
        </div>
  )
}

export default SubmissionForm 