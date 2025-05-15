import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, QrCode } from 'lucide-react';
import { useCart, formatPrice } from '../../hooks/useCart';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode.react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalAmount, submitOrder } = useCart();
  const [showQR, setShowQR] = useState(false);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryDetails, setDeliveryDetails] = useState({
    address: '',
    city: '',
    zipCode: '',
    phone: '',
  });
  const { t, i18n } = useTranslation();

  const handleSubmitOrder = async () => {
    await submitOrder();
    setShowQR(true);
  };

  const totalAmount = getTotalAmount();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{t('order.cart.title')}</h2>
                  {totalItems > 0 && (
                    <p className="text-gray-600">
                      {t('order.cart.itemCount', { count: totalItems })}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {showQR ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold mb-4">{t('order.cart.scanToPay')}</h3>
                  <div className="bg-white p-4 rounded-lg shadow-lg inline-block">
                    <QRCode 
                      value={`https://example.com/pay/${totalAmount}`}
                      size={200}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <p className="mt-4 text-lg font-bold">{formatPrice(totalAmount, i18n)}</p>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>{t('order.cart.qrInstructions')}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowQR(false);
                      onClose();
                    }}
                    className="mt-6 btn-primary"
                  >
                    {t('order.cart.close')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-center space-x-4 mb-6">
                      <button
                        className={`px-4 py-2 rounded-lg ${
                          orderType === 'pickup'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100'
                        }`}
                        onClick={() => setOrderType('pickup')}
                      >
                        {t('order.pickup')}
                      </button>
                      <button
                        className={`px-4 py-2 rounded-lg ${
                          orderType === 'delivery'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100'
                        }`}
                        onClick={() => setOrderType('delivery')}
                      >
                        {t('order.delivery')}
                      </button>
                    </div>

                    {orderType === 'delivery' && (
                      <div className="space-y-4 mb-6">
                        <input
                          type="text"
                          placeholder={t('order.cart.address')}
                          className="w-full p-2 border rounded"
                          value={deliveryDetails.address}
                          onChange={(e) =>
                            setDeliveryDetails({
                              ...deliveryDetails,
                              address: e.target.value,
                            })
                          }
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t('order.cart.city')}
                            className="p-2 border rounded"
                            value={deliveryDetails.city}
                            onChange={(e) =>
                              setDeliveryDetails({
                                ...deliveryDetails,
                                city: e.target.value,
                              })
                            }
                          />
                          <input
                            type="text"
                            placeholder={t('order.cart.zipCode')}
                            className="p-2 border rounded"
                            value={deliveryDetails.zipCode}
                            onChange={(e) =>
                              setDeliveryDetails({
                                ...deliveryDetails,
                                zipCode: e.target.value,
                              })
                            }
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder={t('order.cart.phone')}
                          className="w-full p-2 border rounded"
                          value={deliveryDetails.phone}
                          onChange={(e) =>
                            setDeliveryDetails({
                              ...deliveryDetails,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                    )}
                  </div>

                  {items.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">{t('order.cart.empty')}</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-8">
                        {items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold">{item.name}</h3>
                              <p className="text-gray-600">
                                {formatPrice(item.price, i18n)}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() =>
                                    item.quantity === 1
                                      ? removeFromCart(item.id)
                                      : updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                  {item.quantity === 1 ? (
                                    <Trash2 size={18} />
                                  ) : (
                                    <Minus size={18} />
                                  )}
                                </button>
                                <span className="w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                  <Plus size={18} />
                                </button>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">
                                {formatPrice(item.price * item.quantity, i18n)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">{t('order.cart.subtotal')}</span>
                          <span>{formatPrice(totalAmount, i18n)}</span>
                        </div>
                        {orderType === 'delivery' && (
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">{t('order.cart.deliveryFee')}</span>
                            <span>{formatPrice(50, i18n)}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>{t('order.cart.total')}</span>
                          <span>{formatPrice(totalAmount + (orderType === 'delivery' ? 50 : 0), i18n)}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleSubmitOrder}
                        className="btn-primary w-full flex items-center justify-center"
                      >
                        <QrCode className="mr-2" size={20} />
                        {t('order.cart.payWithQR')}
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;