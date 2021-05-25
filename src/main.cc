#ifndef BUILDING_NODE_EXTENSION
#define BUILDING_NODE_EXTENSION
#endif

#include <nan.h>
#include <node.h>
#include <v8.h>

void Hello(const Nan::FunctionCallbackInfo<v8::Value> &info) {
  v8::Isolate *isolate = info.GetIsolate();
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::String> who;

  if (info.Length() < 1) {
    Nan::New("World").ToLocal(&who);
  } else {
    if (!info[0]->IsString()) {
      Nan::ThrowTypeError("Wrong arguments");
    }
    info[0]->ToString(context).ToLocal(&who);
  }

  v8::Local<v8::String> hello;
  Nan::New("Hello ").ToLocal(&hello);

  v8::Local<v8::String> em;
  Nan::New("!").ToLocal(&em);

  hello = v8::String::Concat(isolate, hello, who);
  hello = v8::String::Concat(isolate, hello, em);

  info.GetReturnValue().Set(hello);
}

void Init(v8::Local<v8::Object> exports) {
  v8::Local<v8::Context> context = exports->CreationContext();
  exports->Set(context, Nan::New("hello").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(Hello)->GetFunction(context).ToLocalChecked());
}

NODE_MODULE(hello, Init)
