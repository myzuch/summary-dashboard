const LoadingScreen = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-800 border-t-transparent rounded-full animate-spin mb-4 mx-auto" />
        <p className="text-gray-600 font-medium">Processing Documents...</p>
      </div>
    </div>
  );
  
  export default LoadingScreen;