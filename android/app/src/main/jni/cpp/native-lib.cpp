#include <jni.h>
#include <android/log.h>
#include <oboe/Oboe.h>

extern "C" {

class AudioRecorder : public oboe::AudioStreamCallback {
public:
    AudioRecorder() {
        oboe::AudioStreamBuilder builder;
        builder.setDirection(oboe::Direction::Input)
               ->setFormat(oboe::AudioFormat::I16)
               ->setCallback(this)
               ->openManagedStream(recordingStream);
        recordingStream->requestStart();
    }

    oboe::DataCallbackResult
    onAudioReady(oboe::AudioStream *stream, void *audioData, int32_t numFrames) override {
        // Aquí es donde procesarías los datos de audio entrantes.
        // Por ejemplo, podrías escribirlos en un archivo.
    }

private:
    oboe::ManagedStream recordingStream;
};

extern "C" JNIEXPORT void JNICALL
Java_com_demo_OboeModule_startRecordingNative(JNIEnv *env, jobject /* this */) {
    __android_log_print(ANDROID_LOG_DEBUG, "OboeModule", "startRecordingNative called");
    static AudioRecorder recorder;


//JNIEXPORT void JNICALL
//Java_com_demo_OboeModule_startRecording(JNIEnv *env, jobject /* this */) {
//    __android_log_print(ANDROID_LOG_DEBUG, "OboeModule", "startRecordingNative called");
//    static AudioRecorder recorder;

}

}
    