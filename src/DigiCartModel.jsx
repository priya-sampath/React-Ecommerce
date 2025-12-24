function DigiCartModel({
  checkModelState,
  closeModel,
  cartItems,
  updateQuantity,
  removeCartItem,
}) {
  if (!checkModelState) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModel();
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const callAlert = () => {
    alert("Please Login to Place Order..");
  };
  return (
    <div
      className="fixed inset-0 bg-grey-700 bg-opacity-30 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 ">
          <h2 className="text-2xl font-bold">DigiMart Cart</h2>
          <button
            onClick={closeModel}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p className="text-xl">Your cart is empty</p>
              <p className="text-sm mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-orange-600 font-bold mt-1">
                      Rs.{item.price}
                    </p>
                  </div>

                  <div className="flex items-center ">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full font-bold"
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg">
                      Rs.{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeCartItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm mt-1"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-end items-center mb-4 gap-5">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold text-orange-600">
                Rs.{totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="w-1/2 mx-auto">
              <button
                className="w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors "
                onClick={callAlert}
              >
                Checkout ({cartItems.length} items)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default DigiCartModel;
