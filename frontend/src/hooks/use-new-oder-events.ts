import usePluginEvents from './use-plugin-events';

const useNewOrderEvents = () => {
  const { emit } = usePluginEvents();

  const startNewOrder = () => {
    emit('START_NEW_ORDER');
  };

  const closeOrder = () => {
    emit('CLOSE_ORDER');
  };

  const reloadCart = () => {
    emit('RELOAD_CART');
  };

  return { startNewOrder, closeOrder, reloadCart };
};

export default useNewOrderEvents;
