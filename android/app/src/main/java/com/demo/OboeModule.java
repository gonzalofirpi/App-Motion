package com.demo;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class OboeModule extends ReactContextBaseJavaModule {

    // Load the native library
    static {
        System.loadLibrary("native-lib");
    }
    OboeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "OboeModule";
    }

    @ReactMethod
    public void pruebaOboe(String message) {
        Log.d("OboeModule", message);
    }

    @ReactMethod
    public void startRecording() {
        // Call the native method
        startRecordingNative();
    }

    // Declare the native method
    private native void startRecordingNative();
}