document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('hi')
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmount=parseFloat(withdrawField.value);
    withdrawField.value='';
    if(isNaN(newWithdrawAmount)){
        alert('please valid input and give a number')
        return;
    }


    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previouswithdrawTotal=parseFloat(withdrawTotalElement.innerText);
    

   


    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotal=parseFloat(balanceTotalElement.innerText);
    
    
    if(newWithdrawAmount>previousBalanceTotal){
        alert(' insufficent amount')
        return;
    }

    const currentWithdrawtotal=previouswithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=currentWithdrawtotal;

    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;



   

})