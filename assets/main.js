const cardNumberMask = document.getElementById('cardnumber');
const walletNumberMask = document.getElementById('walletnumber');
const bikNumberMask = document.getElementById('biknumber');

const maskOptionsCard = {
  mask: '{0000} {0000} {0000} {0000}'
};

const maskOptionsWallet = {
    mask: '{00000} {000} {0} {0000} {0000000}'
};

const maskOptionsBik = {
    mask: '{00} {00} {00} {0000}'
};

const mask1 = IMask(cardNumberMask, maskOptionsCard);
const mask2 = IMask(walletNumberMask, maskOptionsWallet);
const mask3 = IMask(bikNumberMask, maskOptionsBik);
