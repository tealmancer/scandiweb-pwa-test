// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { SHIPPING_STEP, BILLING_STEP,DETAILS_STEP } from 'Route/Checkout/Checkout.config';
import CheckMark from '../../images/check.svg';

import './CheckoutProgressBar.style';

export class CheckoutProgressBar extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="StepperWrapper">
                <div block={(this.props.step===SHIPPING_STEP)?"StepperItem Active":"StepperItem Completed"}>
                    <div block="StepCounter">{(this.props.step===SHIPPING_STEP)? "1":<img src={CheckMark}/>}</div>
                    <div block="StepName">Shipping</div>
                </div>
                <div block={(this.props.step===BILLING_STEP)?"StepperItem Active":(this.props.step===SHIPPING_STEP)?"StepperItem":"StepperItem Completed"}>
                <div block="StepCounter">{(this.props.step===BILLING_STEP)? "2":(this.props.step===DETAILS_STEP)?<img src={CheckMark}/>:"2"}</div>
                    <div block="StepName">Review & Payments</div>
                </div>
            </div>
        );
    }
}

export default CheckoutProgressBar;
