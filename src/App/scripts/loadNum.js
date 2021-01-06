export default function loadNum(pYY, pMM, pArray) {
    const lDT = new Date(pYY, pMM, 1);

    let number = 1,
        firstDay = lDT.getDay() - 1 === -1 ? 6 : lDT.getDay() - 1;

    for (let i = 0; i < 42; i++) {
        const lDTnextMonth = new Date(lDT.getFullYear(), lDT.getMonth(), number);
        if (lDT.getMonth() !== lDTnextMonth.getMonth()) break;

        if (i >= firstDay) {
            pArray.push(number);
            number++;
        }
        else pArray.push('');
    }
}