import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Result({ investmentDetails }) {
  const outputData = calculateInvestmentResults(investmentDetails);
  const showOutput = investmentDetails?.[0]?.initialInvestment > 0;
  var initialInvestment = 0;
  if (showOutput) {
    initialInvestment =
      outputData[0].valueEndOfYear -
      outputData[0].interest -
      outputData[0].annualInvestment;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {outputData.map((data) => {
          console.log(data.valueEndOfYear);
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - data.totalInterest;
          return (
            <tr key={outputData.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
