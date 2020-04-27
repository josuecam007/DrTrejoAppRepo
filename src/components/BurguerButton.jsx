import React from 'react';
import '../assets/styles/components/BurguerButton.scss';

const BurguerButton = () => {
  $(function() {
    $('#bwrapper').on('click', function() {
      $('.bmenu').toggleClass('close');
    });
  });
  return (
    <div id='bwrapper'>
      <div class='main-item bmenu'>
        <span class='line line01'></span>
        <span class='line line02'></span>
        <span class='line line03'></span>
      </div>
    </div>
  );
};

export default BurguerButton;
