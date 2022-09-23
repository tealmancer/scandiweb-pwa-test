import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';

import {CheckoutProgressBar} from '../../component/CheckoutProgressBar/CheckoutProgressBar.component';
import PropTypes from 'prop-types';
import {
    BILLING_STEP,
    CHECKOUT_URL,
    DETAILS_STEP,
    SHIPPING_STEP} from './Checkout.config';

export class Checkout extends SourceCheckout {
    // TODO implement logic
    static propTypes = {

        checkoutStep: PropTypes.oneOf([
            SHIPPING_STEP,
            BILLING_STEP,
            DETAILS_STEP
        ]).isRequired
    }

    renderProgressBar(){
        const {checkoutStep} = this.props;
        return(
            <CheckoutProgressBar step = {checkoutStep} />
        )
    }

    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }

};

export default Checkout;
