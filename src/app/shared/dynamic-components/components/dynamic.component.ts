import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

function makeComponent( selector, template, ...more )
{
  @Component({ selector: selector, template: template })
  class FakeComponent {}
  return FakeComponent;
}

@Component({ ... })
export class MainCmp implements OnInit
{
  // place to insert
  @ViewChild('viewChild', {read: ViewContainerRef}) viewChild: ViewContainerRef;

  constructor(private compiler: ComponentFactoryResolver){}
  // or OnChanges, or event binding.. should work

  ngOnInit()
  {
    // decide on your custom logic here, get you @Input, whatever...

    // and you can actually make some custom dynamic component...
    let childCmp = makeComponent( custom, stuff, here );

    // compile then insert in your location, defined by viewChild
    this.compiler.resolveComponent( childCmp )
      .then( (compFactory:ComponentFactory) => this.viewChild.createComponent(compFactory) )
  }
}