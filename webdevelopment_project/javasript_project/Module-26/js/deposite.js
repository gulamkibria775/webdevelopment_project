document.getElementById('btn-deposite').addEventListener('click',function(){
   
  const depositField=  document.getElementById('deposite-field');
  const newdepositAmount=parseFloat(depositField.value);


  depositField.value=''
   if(isNaN(newdepositAmount)){
      alert('please valid input and give a number')
               
       return;
  }

 const depositTotalElement=document.getElementById('diposit-total');
 const previousTotal=depositTotalElement.innerText; 
 depositTotalElement.innerText=parseFloat(newdepositAmount)+parseFloat(previousTotal);



 const balanceTotalElement=document.getElementById('balance-total');
 const previousBalanceTotal=balanceTotalElement.innerText;
 const currentBalanceTotal=parseFloat(previousBalanceTotal)+parseFloat(newdepositAmount);
 balanceTotalElement.innerText=currentBalanceTotal;




 depositField.value='';
})