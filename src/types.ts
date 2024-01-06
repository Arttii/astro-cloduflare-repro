/* eslint-disable @typescript-eslint/no-type-alias */
// eslint-disable-next-line @typescript-eslint/no-type-alias

export type IScheduleType = 'daily' | 'monthly' | 'weekly';

export interface IDigestGenericStore<RecordType> {
  items: RecordType[];
  // selectedDigest: IDigest | undefined
  // selected: string | undefined

  page: number;

  totalItems: number;
  nextPage: number;
  hasnextPage: boolean;
  selectedIndex: number;
}

export interface IEmail {
  to: string[];
  from: string;
  id: string;
  preview: string;
  subject: string;
  contentUrl: string;
  contentFile: string;
  date: string;
}

export interface IDigest {
  description: string;
  title: string;
  id: string;
  owner: string;
  created: string;
  schedule: ISchedule;
  visibility: boolean;
  last_sent: string;
}

export interface ISubscription {
  expand: {
    digest_id: IDigest;
  };

  id: string;
}

export interface IDigestSecret {
  digest_id: string;
  token: string;
  id: string;
}

export interface IEmailPayload {
  id: string;

  raw: string;
}

export interface ISchedule {
  type: IScheduleType;
  timezone: string;
  weekDays: string[];
  times: string[];
  monthDays: string[];
}

declare global {
  interface Customer {
    total: number;
    total_tax: number;
    currency: string;
  }

  type PaddleEvent =
    | 'Checkout.Close'
    | 'Checkout.Complete'
    | 'Checkout.Coupon.Add'
    | 'Checkout.Coupon.Applied'
    | 'Checkout.Coupon.Cancel'
    | 'Checkout.Coupon.Remove'
    | 'Checkout.Coupon.Submit'
    | 'Checkout.Error'
    | 'Checkout.Language.Change'
    | 'Checkout.Loaded'
    | 'Checkout.Location.Submit'
    | 'Checkout.Login'
    | 'Checkout.Logout'
    | 'Checkout.PaymentComplete'
    | 'Checkout.PaymentMethodChange'
    | 'Checkout.PaymentMethodSelected'
    | 'Checkout.Quantity.Change'
    | 'Checkout.User.Subscribed'
    | 'Checkout.Vat.Add'
    | 'Checkout.Vat.Applied'
    | 'Checkout.Vat.Cancel'
    | 'Checkout.Vat.Remove'
    | 'Checkout.Vat.Submit'
    | 'Checkout.WireTransfer.Complete'
    | 'Checkout.WireTransfer.PaymentMethodChange';

  interface Window {
    Paddle: {
      Checkout: {
        open: (options: {
          product?: number | string;
          title?: string;
          message?: string;
          coupon?: string;
          email?: string;
          marketingConsent?: '0' | '1';
          country?: string;
          postcode?: string;
          allowQuantity?: boolean;
          quantity?: number;
          disableLogout?: boolean;
          locale?: string;
          passthrough?: string;
          referring_domain?: string;
          success?: string;
          successCallback?: string;
          closeCallback?: string;
          loadCallback?: string;
          upsell?: number | string;
          upsellTitle?: string;
          upsellText?: string;
          upsellAction?: string;
          upsellCoupon?: string;
          upsellPassthrough?: string;
          override?: string;
          displayModeTheme?: string;
          // Inline checkout
          method?: string;
          frameTarget?: string;
          frameInitialHeight?: number;
          frameStyle?: string;
        }) => void;
      };
      Environment: {
        set: (environment: string) => void;
      };
      Setup: (options: {
        vendor: number;
        eventCallback?: (data: {
          event: PaddleEvent;
          eventData: {
            payment_method?: string;
            available_payment_methods?: string;
            available_payment_methods_count?: number;
            checkout: {
              recurring_prices: {
                customer: Customer;
                interval: {
                  type: string;
                  length: number;
                };
              };
              prices: {
                customer: Customer;
              };
            };
            product: { id: number; name: string; quantity: number };
            user: { id: string; email: string; country: string };
          };
          checkoutData: {
            'paddlejs-version': '2.0.9';
            apple_pay_enabled: string;
            display_mode: string;
            guest_email: string;
            is_popup: string;
            method: string;
            paddle_js: string;
            parentURL: string;
            parent_url: string;
            passthrough: string;
            popup: string;
            product: string;
            referring_domain: string;
          };
        }) => void;
      }) => void;
    };
  }
}
