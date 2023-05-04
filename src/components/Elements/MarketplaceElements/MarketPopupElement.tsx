const MarketPopupElement = () => {
  return (
    <div className="confirmation-popup market">
      <p>
        Are you sure you want to buy <strong>2</strong> item for{" "}
        <strong>5000BGN</strong>
      </p>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default MarketPopupElement;
