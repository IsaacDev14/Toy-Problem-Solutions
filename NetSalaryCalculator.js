function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
        paye = 2400 + 2083.25 + 140000.1 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 2400 + 2083.25 + 140000.1 + 97500 + (grossSalary - 800000) * 0.35;
    }

    // NHIF Calculation (2.75% of Gross Salary)
    const nhif = grossSalary * 0.0275;

    // NSSF Calculation (6% of up to Ksh 18,000)
    const nssf = Math.min(grossSalary, 18000) * 0.06;

    // Net Salary
    const netSalary = grossSalary - (paye + nhif + nssf);

    console.log("Gross Salary: Ksh", grossSalary.toFixed(2));
    console.log("PAYE: Ksh", paye.toFixed(2));
    console.log("NHIF: Ksh", nhif.toFixed(2));
    console.log("NSSF: Ksh", nssf.toFixed(2));
    console.log("Net Salary: Ksh", netSalary.toFixed(2));
}


calculateNetSalary(20000, 30000);
