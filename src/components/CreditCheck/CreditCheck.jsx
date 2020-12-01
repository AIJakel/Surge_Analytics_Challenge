import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import propTypes from 'prop-types';
import './CreditCheck.scss';

/**
 * Handles checking if order is greater than credit.
 * Credit limit is saved in a cookie for cross-session use.
 */
function CreditCheck (props) {
  const [cookies, setCookie] = useCookies(['name']);
  const [limit, updateLimit] = useState(cookies.limit ? cookies.limit : 0);
  const { total } = props;

  function setLimit(e) {
    updateLimit(e.target.value);
    setCookie('limit', e.target.value, '/')
  }


  // TODO if limit < total bad
  return (
    <div className="creditCheck">
      <h2 className="creditCheck_header">
        Credit Checker
      </h2>
      <div className="creditCheck_body">
        <TextField
          value={limit}
          onChange={setLimit}
          variant="outlined"
          label="Credit Limit"
          error={isNaN(limit)}
          helperText={isNaN(limit) ? "Please enter a number." : ""}
        />
        <div className="creditCheck_indicatorContainer">
          <div className={classNames("creditCheck_indicator", {"creditCheck_indicator_error": limit < total})} />
        </div>
      </div>
    </div>
  );
}

export default CreditCheck;

CreditCheck.propTypes = {
  total: propTypes.number.isRequired,
};