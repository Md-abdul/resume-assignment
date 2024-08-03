// import React from 'react';

const FooterSection = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}  className="-mt-10">
        <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-900"></hr>
      {/* <h2 style={{textAlign:'left'}} className="ml-4 mt-3 text-xl font-bold">Declaration</h2> */}
      <p style={{ textAlign: 'left', margin: '0 auto', maxWidth: '620px' }} className="-mt-5">
        I hereby declare that all the information provided in this resume is true and accurate to the best of my knowledge. I am fully responsible for any discrepancies found in the provided details.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', maxWidth: '600px', margin: '40px auto 0' }}>
        <div>
          <p>Signature: ______________________</p>
        </div>
        <div>
          <p>Date: _______________</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
