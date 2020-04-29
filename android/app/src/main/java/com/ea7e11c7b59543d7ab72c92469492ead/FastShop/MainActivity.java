package com.ea7e11c7b59543d7ab72c92469492ead.FastShop;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
	...
	add(jp.rdlabo.capacitor.plugin.facebook.FacebookLogin.class);
	...
}});
  }
}
