import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { LoadingScreen } from './loadable/LoadingScreen';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ '../pages/Home'),
  loading: () => LoadingScreen
});

const LoadableTipsSukses = Loadable({
  loader: () => import('../pages/TipsSukses'),
  loading: () => LoadingScreen
});

const LoadableBePartner = Loadable({
  loader: () => import('../pages/partner/BePartner'),
  loading: () => LoadingScreen
});

const LoadableRegisterPartner = Loadable({
  loader: () => import('../pages/partner/RegisterPartner'),
  loading: () => LoadingScreen
});

const LoadablePrivacy = Loadable({
  loader: () => import('../pages/about/PrivacyPolicyRise'),
  loading: () => LoadingScreen
});

const LoadableToc = Loadable({
  loader: () => import('../pages/about/Toc'),
  loading: () => LoadingScreen
});

// Service List Pages
const LoadableServiceList = Loadable({
  loader: () => import('../pages/service-list/ServiceList'),
  loading: () => LoadingScreen
});

const LoadableServiceDetail = Loadable({
  loader: () => import('../pages/service-list/ServiceDetail'),
  loading: () => LoadingScreen
});

// Setting Pages
const LoadableSetting = Loadable({
  loader: () => import('../pages/setting/AccountSetting'),
  loading: () => LoadingScreen
});

const LoadableNotificationSetting = Loadable({
  loader: () => import('../pages/setting/NotificationSetting'),
  loading: () => LoadingScreen
});

// Payment Pages
const LoadableOrderDetail = Loadable({
  loader: () => import('../pages/order/DetailOrder'),
  loading: () => LoadingScreen
});

const LoadablePaymentOption = Loadable({
  loader: () => import('../pages/order/PaymentOption'),
  loading: () => LoadingScreen
});

const LoadablePaymentConfirm = Loadable({
  loader: () => import('../pages/order/PaymentConfirm'),
  loading: () => LoadingScreen
});

const LoadableProjectDetail = Loadable({
  loader: () => import('../pages/order/ProjectDetail'),
  loading: () => LoadingScreen
});

// Order On-going Detail
const LoadableBuyerOrderDetail = Loadable({
  loader: () => import('../pages/order/BuyerOrderDetail'),
  loading: () => LoadingScreen
});

const LoadablePartnerOrderDetail = Loadable({
  loader: () => import('../pages/order/PartnerOrderDetail'),
  loading: () => LoadingScreen
});

const LoadableResolutionCenter = Loadable({
  loader: () => import('../pages/order/ResolutionCenter'),
  loading: () => LoadingScreen
});

// Partner Pages

const LoadablePartnerDashboard = Loadable({
  loader: () => import('../pages/partner/PartnerDashboard'),
  loading: () => LoadingScreen
});

const LoadablePartnerInbox = Loadable({
  loader: () => import('../pages/partner/PartnerInbox'),
  loading: () => LoadingScreen
});

const LoadablePartnerOrderan = Loadable({
  loader: () => import('../pages/partner/PartnerOrderan'),
  loading: () => LoadingScreen
});

const LoadablePartnerGawean = Loadable({
  loader: () => import('../pages/partner/PartnerGawean'),
  loading: () => LoadingScreen
});

const LoadablePartnerSaldo = Loadable({
  loader: () => import('../pages/partner/PartnerSaldo'),
  loading: () => LoadingScreen
});

const LoadablePartnerProfile = Loadable({
  loader: () => import('../pages/partner/PartnerProfile'),
  loading: () => LoadingScreen
});

const LoadablePartnerSetting = Loadable({
  loader: () => import('../pages/partner/PartnerSetting'),
  loading: () => LoadingScreen
});

// Create Gawean Pages

const LoadableStepTinjauan = Loadable({
  loader: () => import('../pages/create-gawean/StepTinjauan'),
  loading: () => LoadingScreen
});

const LoadableStepHarga = Loadable({
  loader: () => import('../pages/create-gawean/StepHarga'),
  loading: () => LoadingScreen
});

const LoadableStepDeskripsi = Loadable({
  loader: () => import('../pages/create-gawean/StepDeskripsi'),
  loading: () => LoadingScreen
});

const LoadableStepDetail = Loadable({
  loader: () => import('../pages/create-gawean/StepDetail'),
  loading: () => LoadingScreen
});

const LoadableStepGaleri = Loadable({
  loader: () => import('../pages/create-gawean/StepGaleri'),
  loading: () => LoadingScreen
});

const LoadableStepTerbitkan = Loadable({
  loader: () => import('../pages/create-gawean/StepTerbitkan'),
  loading: () => LoadingScreen
});

// Buyer dashboard
const LoadableOrderanListBuyer = Loadable({
  loader: () => import('../pages/buyer/OrderanListBuyer'),
  loading: () => LoadingScreen
});

const LoadableInboxBuyer = Loadable({
  loader: () => import('../pages/buyer/BuyerInbox'),
  loading: () => LoadingScreen
});

const LoadableSaldoBuyer = Loadable({
  loader: () => import('../pages/buyer/BuyerSaldo'),
  loading: () => LoadingScreen
});

const LoadableReviewBuyer = Loadable({
  loader: () => import('../pages/order/ReviewPage'),
  loading: () => LoadingScreen
});

const LoadableNotFound = Loadable({
  loader: () => import('../pages/NotFound'),
  loading: () => LoadingScreen
});

const App = () => (
  <div className="app">
    <Switch>
      {/* <Route path="*" component={LoadableNotFound} /> */}
      <Route exact path="/" component={LoadableHome} />
      <Route exact path="/tips-sukses" component={LoadableTipsSukses} />
      <Route exact path="/menjadi-partner" component={LoadableBePartner} />
      <Route exact path="/daftar-partner" component={LoadableRegisterPartner} />
      <Route exact path="/kebijakan-privasi" component={LoadablePrivacy} />
      <Route exact path="/syarat-ketentuan" component={LoadableToc} />
      <Route
        exact
        path="/pusat-resolusi"
        component={LoadableResolutionCenter}
      />

      {/* Buyer page */}
      <Route exact path="/buyer/orderan" component={LoadableOrderanListBuyer} />
      <Route exact path="/buyer/inbox" component={LoadableInboxBuyer} />
      <Route exact path="/buyer/saldo" component={LoadableSaldoBuyer} />

      {/* Category List */}
      <Route
        exact
        path="/category/subcategory"
        component={LoadableServiceList}
      />
      <Route
        exact
        path="/user/detail-gawean"
        component={LoadableServiceDetail}
      />

      {/* Payment Route */}
      <Route
        exact
        path="/order/order-id/detail"
        component={LoadableOrderDetail}
      />
      <Route
        exact
        path="/order/order-id/payment-option"
        component={LoadablePaymentOption}
      />
      <Route
        exact
        path="/order/order-id/payment-confirm"
        component={LoadablePaymentConfirm}
      />
      <Route
        exact
        path="/order/order-id/isi-detail-gawean"
        component={LoadableProjectDetail}
      />
      <Route
        exact
        path="/buyer-order-detail"
        component={LoadableBuyerOrderDetail}
      />
      <Route
        exact
        path="/order/order-id/review"
        component={LoadableReviewBuyer}
      />

      {/* Partner Route */}
      <Route
        exact
        path="/partner/dashboard"
        component={LoadablePartnerDashboard}
      />
      <Route exact path="/partner/inbox" component={LoadablePartnerInbox} />
      <Route exact path="/partner/orderan" component={LoadablePartnerOrderan} />
      <Route exact path="/partner/gawean" component={LoadablePartnerGawean} />
      <Route exact path="/partner/saldo" component={LoadablePartnerSaldo} />
      <Route
        exact
        path="/partner/orderan-detail/index"
        component={LoadablePartnerOrderDetail}
      />
      <Route exact path="/partner/setting" component={LoadablePartnerSetting} />
      <Route
        exact
        path="/user/partner/profile"
        component={LoadablePartnerProfile}
      />

      {/* Setting Route */}
      <Route
        exact
        path="/partner/pengaturan/biodata-diri"
        component={LoadableSetting}
      />
      <Route
        exact
        path="/partner/pengaturan/notifikasi"
        component={LoadableNotificationSetting}
      />
      {/* Create Gawean */}
      <Route
        exact
        path="/posting-gawean/tinjauan"
        component={LoadableStepTinjauan}
      />
      <Route exact path="/posting-gawean/harga" component={LoadableStepHarga} />
      <Route
        exact
        path="/posting-gawean/deskripsi-FAQ"
        component={LoadableStepDeskripsi}
      />
      <Route
        exact
        path="/posting-gawean/detail-gawean"
        component={LoadableStepDetail}
      />
      <Route
        exact
        path="/posting-gawean/galeri"
        component={LoadableStepGaleri}
      />
      <Route
        exact
        path="/posting-gawean/terbitkan"
        component={LoadableStepTerbitkan}
      />
    </Switch>
  </div>
);

export default App;
