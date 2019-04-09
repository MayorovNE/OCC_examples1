import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
 
interface VectorXY     {
    kx: number;
    ky: number;
};
interface VectorXYZ     {
    kx: number;
    ky: number;
    kz: number;
}; 
class vectorOperation2D{
    vector1: VectorXY;
    vector2: VectorXY;
    constructor(vek1: VectorXY, vek2: VectorXY){
        this.vector1 = vek1;
        this.vector2 = vek2;
    }
    slojenie2d(vect1: VectorXY, vect2: VectorXY ):VectorXY{
        let _sX: number;
        let _sY: number;
        _sX= Number(vect1.kx) + Number(vect2.kx);
        _sY= Number(vect1.ky) + Number(vect2.ky);
        return {kx: _sX,ky: _sY} ;
    };
    umnojenie2d(vect1: VectorXY, vect2: VectorXY ):number{
        let _sX: number;
        let _sY: number;
        _sX= vect1.kx*vect2.kx;
        _sY= vect1.ky*vect2.ky;
        return _sX+_sY;
    };
};
class vectorOperation3D{
    vector1: VectorXYZ;
    vector2: VectorXYZ;
    constructor(vek1: VectorXYZ, vek2: VectorXYZ){
        this.vector1 = vek1;
        this.vector2 = vek2;
    }
    slojenie3d(vect1: VectorXYZ, vect2: VectorXYZ):VectorXYZ{
        let _sX: number;
        let _sY: number;
        let _sZ: number;
        _sX= Number(vect1.kx)+Number(vect2.kx);
        _sY= Number(vect1.ky)+Number(vect2.ky);
        _sZ= Number(vect1.kz)+Number(vect2.kz);
        return {kx: _sX, ky: _sY, kz: _sZ};
    };
    umnojenie3d(vect1: VectorXYZ, vect2: VectorXYZ):number{
        let _sX: number;
        let _sY: number;
        let _sZ: number;
        _sX= vect1.kx*vect2.kx;
        _sY= vect1.ky*vect2.ky;
        _sZ= vect1.kz*vect2.kz;
        return _sX+_sY+_sZ;
    };
};

@Component({
  selector: 'vekinter-root',
  templateUrl: './vekinter.component.html',
  styleUrls: ['./vekinter.component.css']
})


export class VekinterComponent implements AfterViewInit{
    @ViewChild("inputElement1") num1Ref: ElementRef;
    @ViewChild("inputElement2") num2Ref: ElementRef;
    @ViewChild("inputElement3") num3Ref: ElementRef;
    @ViewChild("inputElement4") num4Ref: ElementRef;
    @ViewChild("inputElement5") num5Ref: ElementRef;
    @ViewChild("inputElement6") num6Ref: ElementRef;
    @ViewChild("inputElement7") num7Ref: ElementRef;
    @ViewChild("inputElement8") num8Ref: ElementRef;
    @ViewChild("inputElement9") num9Ref: ElementRef;
    @ViewChild("inputElement10") num10Ref: ElementRef;
    @ViewChild("spanElement1") _resultRef: ElementRef;
    @ViewChild("spanElement2") _result1Ref: ElementRef;
    @ViewChild("spanElement3") _additionXRef: ElementRef;
    @ViewChild("spanElement4") _additionX1Ref: ElementRef;
    @ViewChild("spanElement5") _additionYRef: ElementRef;
    @ViewChild("spanElement6") _additionY1Ref: ElementRef;
    @ViewChild("spanElement7") _additionZ1Ref: ElementRef;

    private _f2dv: VectorXY;
    private _s2dv: VectorXY;
    private _f3dv: VectorXYZ;
    private _s3dv: VectorXYZ;
    private _result: number ;
    private _result1: number ;
    private  _additionX: number;
    private  _additionY: number;
    private  _additionX1: number;
    private  _additionY1: number;
    private  _additionZ1: number;

    ngAfterViewInit() {
        this._f2dv = this.buildF2DV();
        this._s2dv = this.buildS2DV();
        this._f3dv = this.buildF3DV();
        this._s3dv = this.buildS3DV();
    }

    buildF2DV(): VectorXY {
        let _koordx = this.num1Ref.nativeElement.value;
        let _koordy = this.num2Ref.nativeElement.value;
        return { kx: Number(_koordx ), ky: Number(_koordy as number)};
    };
    buildS2DV(): VectorXY {
        let _koordx = this.num3Ref.nativeElement.value;
        let _koordy = this.num4Ref.nativeElement.value;
        return { kx: Number(_koordx) , ky: Number(_koordy as number)};
    };
    buildF3DV(): VectorXYZ {
        let _koordx = this.num5Ref.nativeElement.value;
        let _koordy = this.num6Ref.nativeElement.value;
        let _koordz = this.num7Ref.nativeElement.value;
        return { kx: _koordx, ky: _koordy, kz: _koordz};
    };
    buildS3DV(): VectorXYZ {
        let _koordx = this.num8Ref.nativeElement.value;
        let _koordy = this.num9Ref.nativeElement.value;
        let _koordz = this.num10Ref.nativeElement.value;
        return { kx: _koordx, ky: _koordy, kz: _koordz};
    };


   result2d(){
    console.log("checkValidity()", typeof this.num4Ref.nativeElement.checkValidity());
        if (this.num1Ref.nativeElement.checkValidity() == true) {  
            if (this.num2Ref.nativeElement.checkValidity() == true) {   
                if (this.num3Ref.nativeElement.checkValidity() == true) { 
                    if (this.num4Ref.nativeElement.checkValidity() == true) { 
                        this.ngAfterViewInit();
                        let _op2d = new vectorOperation2D(this._f2dv,this._s2dv);
                        this._result=_op2d.umnojenie2d(this._f2dv,this._s2dv);
                        this._additionX=_op2d.slojenie2d(this._f2dv,this._s2dv).kx;
                        this._additionY=_op2d.slojenie2d(this._f2dv,this._s2dv).ky;
                    }
                    else {alert("ENTER NUMBERS");
                    this.num4Ref.nativeElement.value=0;}
                }
                else {alert("ENTER NUMBERS");
                this.num3Ref.nativeElement.value=0;}
            }
            else {alert("ENTER NUMBERS");
            this.num2Ref.nativeElement.value=0;}
        }
        else {alert("ENTER NUMBERS");
        this.num1Ref.nativeElement.value=0;}
    };
    result3d(){
        if (this.num5Ref.nativeElement.checkValidity() == true) {  
            if (this.num6Ref.nativeElement.checkValidity() == true) {   
                if (this.num7Ref.nativeElement.checkValidity() == true) { 
                    if (this.num8Ref.nativeElement.checkValidity() == true) { 
                        if (this.num9Ref.nativeElement.checkValidity() == true) {  
                            if (this.num10Ref.nativeElement.checkValidity() == true) { 
                                this.ngAfterViewInit();
                                let _op3d = new vectorOperation3D(this._f3dv,this._s3dv);  
                                this._result1=_op3d.umnojenie3d(this._f3dv,this._s3dv);
                                this._additionX1=_op3d.slojenie3d(this._f3dv,this._s3dv).kx;
                                this._additionY1=_op3d.slojenie3d(this._f3dv,this._s3dv).ky;
                                this._additionZ1=_op3d.slojenie3d(this._f3dv,this._s3dv).kz;
                            }
                            else {alert("ENTER NUMBERS");
                            this.num10Ref.nativeElement.value=0;}
                        }
                        else {alert("ENTER NUMBERS");
                        this.num9Ref.nativeElement.value=0;}
                    }
                    else {alert("ENTER NUMBERS");
                    this.num8Ref.nativeElement.value=0;}
                }
                else {alert("ENTER NUMBERS");
                this.num7Ref.nativeElement.value=0;}
            }
            else {alert("ENTER NUMBERS");
            this.num6Ref.nativeElement.value=0;}
        }
        else {alert("ENTER NUMBERS");
        this.num5Ref.nativeElement.value=0;}
    }      
    constructor(private router: Router){}
    goNavigation(){       
        this.router.navigate(['/navigation']);
  }                 
};



