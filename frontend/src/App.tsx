import Common from '@zydon/common/components/Common';
import Viewer from '@zydon/plugin/components/Viewer';

import { mockPluginProps, primaryColor } from 'mocks/data';

import AppPlugin from './@app/App';
import AppNewOrderPlugin from './@app-new-order/App';
import AppProductDetailPlugin from './@app-product-detail/App';
import AppProductDetailActionsPlugin from './@app-product-detail-actions/App';
import AppProductSearchResultsView from './@app-product-search-results/App';
import AppProductsListView from './@app-products-list/App';
import AppProductsListItemView from './@app-products-list-item/App';
import AppScreen from './@app-screen/App';
import AppSearch from './@app-search/App';
import Configs from './@configs/Configs';

import '@zydon/common/styles.css';

const App = () => (
  <Common primaryColor={primaryColor}>
    <Viewer
      configView={<Configs />}
      appView={<AppPlugin {...mockPluginProps.app} />}
      newOrderView={<AppNewOrderPlugin {...mockPluginProps.newOrder} />}
      checkoutView={<>Checkout View</>}
      productDetailView={
        <AppProductDetailPlugin {...mockPluginProps.productDetail} />
      }
      productDetailActionsView={
        <AppProductDetailActionsPlugin
          {...mockPluginProps.productDetailActions}
        />
      }
      productsListView={
        <AppProductsListView {...mockPluginProps.productsList} />
      }
      productsListItemView={
        <AppProductsListItemView {...mockPluginProps.productsListItem} />
      }
      screenView={<AppScreen {...mockPluginProps.appScreen} />}
      centerHeader={<AppSearch {...mockPluginProps.appSearch} />}
      productSearchResultsView={
        <AppProductSearchResultsView {...mockPluginProps.productSearchResults} />
      }
    />
  </Common>
);

export default App;
