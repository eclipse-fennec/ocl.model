import type { EObject } from '@emfts/core'
import type { OclType } from './generated/OclType'
import type { PrimitiveType } from './generated/PrimitiveType'
import type { AnyType } from './generated/AnyType'
import type { VoidType } from './generated/VoidType'
import type { InvalidType } from './generated/InvalidType'
import type { CollectionType } from './generated/CollectionType'
import type { SetType } from './generated/SetType'
import type { OrderedSetType } from './generated/OrderedSetType'
import type { BagType } from './generated/BagType'
import type { SequenceType } from './generated/SequenceType'
import type { MapType } from './generated/MapType'
import type { TupleType } from './generated/TupleType'
import type { MessageType } from './generated/MessageType'
import type { ClassifierType } from './generated/ClassifierType'
import type { OclExpression } from './generated/OclExpression'
import type { CallExp } from './generated/CallExp'
import type { FeatureCallExp } from './generated/FeatureCallExp'
import type { PropertyCallExp } from './generated/PropertyCallExp'
import type { NavigationCallExp } from './generated/NavigationCallExp'
import type { AssociationClassCallExp } from './generated/AssociationClassCallExp'
import type { OperationCallExp } from './generated/OperationCallExp'
import type { LoopExp } from './generated/LoopExp'
import type { IteratorExp } from './generated/IteratorExp'
import type { IterateExp } from './generated/IterateExp'
import type { LiteralExp } from './generated/LiteralExp'
import type { PrimitiveLiteralExp } from './generated/PrimitiveLiteralExp'
import type { IntegerLiteralExp } from './generated/IntegerLiteralExp'
import type { RealLiteralExp } from './generated/RealLiteralExp'
import type { UnlimitedNaturalLiteralExp } from './generated/UnlimitedNaturalLiteralExp'
import type { StringLiteralExp } from './generated/StringLiteralExp'
import type { BooleanLiteralExp } from './generated/BooleanLiteralExp'
import type { NullLiteralExp } from './generated/NullLiteralExp'
import type { InvalidLiteralExp } from './generated/InvalidLiteralExp'
import type { EnumLiteralExp } from './generated/EnumLiteralExp'
import type { CollectionLiteralExp } from './generated/CollectionLiteralExp'
import type { TupleLiteralExp } from './generated/TupleLiteralExp'
import type { MapLiteralExp } from './generated/MapLiteralExp'
import type { IfExp } from './generated/IfExp'
import type { LetExp } from './generated/LetExp'
import type { VariableExp } from './generated/VariableExp'
import type { TypeExp } from './generated/TypeExp'
import type { MessageExp } from './generated/MessageExp'
import type { Variable } from './generated/Variable'
import type { Constraint } from './generated/Constraint'
import type { CollectionLiteralPart } from './generated/CollectionLiteralPart'
import type { CollectionItem } from './generated/CollectionItem'
import type { CollectionRange } from './generated/CollectionRange'
import type { TupleLiteralPart } from './generated/TupleLiteralPart'
import type { MapLiteralPart } from './generated/MapLiteralPart'
import type { TuplePart } from './generated/TuplePart'
import type { StateExp } from './generated/StateExp'
import { OclPackage } from './generated/OclPackage'

/**
 * Switch class for the OCL model.
 * Dispatches based on EClass using classifier IDs with supertype fallback chain.
 * Port of the Fennec Java OclSwitch pattern.
 */
export abstract class OclSwitch<T> {
  doSwitch(eObject: EObject): T | undefined {
    const eClass = eObject.eClass()
    const pkg = OclPackage.eINSTANCE
    // Check if this object belongs to the OCL package
    if (eClass.getEPackage() === pkg) {
      return this.doSwitchByName(eClass.getName()!, eObject)
    }
    return this.defaultCase(eObject)
  }

  private doSwitchByName(className: string, eObject: EObject): T | undefined {
    switch (className) {
      case 'OclType': {
        let result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'PrimitiveType': {
        let result = this.casePrimitiveType(eObject as unknown as PrimitiveType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'AnyType': {
        let result = this.caseAnyType(eObject as unknown as AnyType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'VoidType': {
        let result = this.caseVoidType(eObject as unknown as VoidType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'InvalidType': {
        let result = this.caseInvalidType(eObject as unknown as InvalidType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'CollectionType': {
        let result = this.caseCollectionType(eObject as unknown as CollectionType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'SetType': {
        let result = this.caseSetType(eObject as unknown as SetType)
        if (result === undefined) result = this.caseCollectionType(eObject as unknown as CollectionType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'OrderedSetType': {
        let result = this.caseOrderedSetType(eObject as unknown as OrderedSetType)
        if (result === undefined) result = this.caseCollectionType(eObject as unknown as CollectionType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'BagType': {
        let result = this.caseBagType(eObject as unknown as BagType)
        if (result === undefined) result = this.caseCollectionType(eObject as unknown as CollectionType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'SequenceType': {
        let result = this.caseSequenceType(eObject as unknown as SequenceType)
        if (result === undefined) result = this.caseCollectionType(eObject as unknown as CollectionType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'MapType': {
        let result = this.caseMapType(eObject as unknown as MapType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'TupleType': {
        let result = this.caseTupleType(eObject as unknown as TupleType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'MessageType': {
        let result = this.caseMessageType(eObject as unknown as MessageType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'ClassifierType': {
        let result = this.caseClassifierType(eObject as unknown as ClassifierType)
        if (result === undefined) result = this.caseOclType(eObject as unknown as OclType)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'PropertyCallExp': {
        let result = this.casePropertyCallExp(eObject as unknown as PropertyCallExp)
        if (result === undefined) result = this.caseFeatureCallExp(eObject as unknown as FeatureCallExp)
        if (result === undefined) result = this.caseCallExp(eObject as unknown as CallExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'NavigationCallExp': {
        let result = this.caseNavigationCallExp(eObject as unknown as NavigationCallExp)
        if (result === undefined) result = this.caseFeatureCallExp(eObject as unknown as FeatureCallExp)
        if (result === undefined) result = this.caseCallExp(eObject as unknown as CallExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'AssociationClassCallExp': {
        let result = this.caseAssociationClassCallExp(eObject as unknown as AssociationClassCallExp)
        if (result === undefined) result = this.caseNavigationCallExp(eObject as unknown as NavigationCallExp)
        if (result === undefined) result = this.caseFeatureCallExp(eObject as unknown as FeatureCallExp)
        if (result === undefined) result = this.caseCallExp(eObject as unknown as CallExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'OperationCallExp': {
        let result = this.caseOperationCallExp(eObject as unknown as OperationCallExp)
        if (result === undefined) result = this.caseFeatureCallExp(eObject as unknown as FeatureCallExp)
        if (result === undefined) result = this.caseCallExp(eObject as unknown as CallExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'IteratorExp': {
        let result = this.caseIteratorExp(eObject as unknown as IteratorExp)
        if (result === undefined) result = this.caseLoopExp(eObject as unknown as LoopExp)
        if (result === undefined) result = this.caseCallExp(eObject as unknown as CallExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'IterateExp': {
        let result = this.caseIterateExp(eObject as unknown as IterateExp)
        if (result === undefined) result = this.caseLoopExp(eObject as unknown as LoopExp)
        if (result === undefined) result = this.caseCallExp(eObject as unknown as CallExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'IntegerLiteralExp': {
        let result = this.caseIntegerLiteralExp(eObject as unknown as IntegerLiteralExp)
        if (result === undefined) result = this.casePrimitiveLiteralExp(eObject as unknown as PrimitiveLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'RealLiteralExp': {
        let result = this.caseRealLiteralExp(eObject as unknown as RealLiteralExp)
        if (result === undefined) result = this.casePrimitiveLiteralExp(eObject as unknown as PrimitiveLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'UnlimitedNaturalLiteralExp': {
        let result = this.caseUnlimitedNaturalLiteralExp(eObject as unknown as UnlimitedNaturalLiteralExp)
        if (result === undefined) result = this.casePrimitiveLiteralExp(eObject as unknown as PrimitiveLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'StringLiteralExp': {
        let result = this.caseStringLiteralExp(eObject as unknown as StringLiteralExp)
        if (result === undefined) result = this.casePrimitiveLiteralExp(eObject as unknown as PrimitiveLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'BooleanLiteralExp': {
        let result = this.caseBooleanLiteralExp(eObject as unknown as BooleanLiteralExp)
        if (result === undefined) result = this.casePrimitiveLiteralExp(eObject as unknown as PrimitiveLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'NullLiteralExp': {
        let result = this.caseNullLiteralExp(eObject as unknown as NullLiteralExp)
        if (result === undefined) result = this.casePrimitiveLiteralExp(eObject as unknown as PrimitiveLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'InvalidLiteralExp': {
        let result = this.caseInvalidLiteralExp(eObject as unknown as InvalidLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'EnumLiteralExp': {
        let result = this.caseEnumLiteralExp(eObject as unknown as EnumLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'CollectionLiteralExp': {
        let result = this.caseCollectionLiteralExp(eObject as unknown as CollectionLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'TupleLiteralExp': {
        let result = this.caseTupleLiteralExp(eObject as unknown as TupleLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'MapLiteralExp': {
        let result = this.caseMapLiteralExp(eObject as unknown as MapLiteralExp)
        if (result === undefined) result = this.caseLiteralExp(eObject as unknown as LiteralExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'IfExp': {
        let result = this.caseIfExp(eObject as unknown as IfExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'LetExp': {
        let result = this.caseLetExp(eObject as unknown as LetExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'VariableExp': {
        let result = this.caseVariableExp(eObject as unknown as VariableExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'TypeExp': {
        let result = this.caseTypeExp(eObject as unknown as TypeExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'MessageExp': {
        let result = this.caseMessageExp(eObject as unknown as MessageExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'Variable': {
        let result = this.caseVariable(eObject as unknown as Variable)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'Constraint': {
        let result = this.caseConstraint(eObject as unknown as Constraint)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'CollectionItem': {
        let result = this.caseCollectionItem(eObject as unknown as CollectionItem)
        if (result === undefined) result = this.caseCollectionLiteralPart(eObject as unknown as CollectionLiteralPart)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'CollectionRange': {
        let result = this.caseCollectionRange(eObject as unknown as CollectionRange)
        if (result === undefined) result = this.caseCollectionLiteralPart(eObject as unknown as CollectionLiteralPart)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'TupleLiteralPart': {
        let result = this.caseTupleLiteralPart(eObject as unknown as TupleLiteralPart)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'MapLiteralPart': {
        let result = this.caseMapLiteralPart(eObject as unknown as MapLiteralPart)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'TuplePart': {
        let result = this.caseTuplePart(eObject as unknown as TuplePart)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      case 'StateExp': {
        let result = this.caseStateExp(eObject as unknown as StateExp)
        if (result === undefined) result = this.caseOclExpression(eObject as unknown as OclExpression)
        if (result === undefined) result = this.defaultCase(eObject)
        return result
      }
      default:
        return this.defaultCase(eObject)
    }
  }

  // Case methods - override in subclasses to handle specific types
  caseOclType(_obj: OclType): T | undefined { return undefined }
  casePrimitiveType(_obj: PrimitiveType): T | undefined { return undefined }
  caseAnyType(_obj: AnyType): T | undefined { return undefined }
  caseVoidType(_obj: VoidType): T | undefined { return undefined }
  caseInvalidType(_obj: InvalidType): T | undefined { return undefined }
  caseCollectionType(_obj: CollectionType): T | undefined { return undefined }
  caseSetType(_obj: SetType): T | undefined { return undefined }
  caseOrderedSetType(_obj: OrderedSetType): T | undefined { return undefined }
  caseBagType(_obj: BagType): T | undefined { return undefined }
  caseSequenceType(_obj: SequenceType): T | undefined { return undefined }
  caseMapType(_obj: MapType): T | undefined { return undefined }
  caseTupleType(_obj: TupleType): T | undefined { return undefined }
  caseMessageType(_obj: MessageType): T | undefined { return undefined }
  caseClassifierType(_obj: ClassifierType): T | undefined { return undefined }
  caseOclExpression(_obj: OclExpression): T | undefined { return undefined }
  caseCallExp(_obj: CallExp): T | undefined { return undefined }
  caseFeatureCallExp(_obj: FeatureCallExp): T | undefined { return undefined }
  casePropertyCallExp(_obj: PropertyCallExp): T | undefined { return undefined }
  caseNavigationCallExp(_obj: NavigationCallExp): T | undefined { return undefined }
  caseAssociationClassCallExp(_obj: AssociationClassCallExp): T | undefined { return undefined }
  caseOperationCallExp(_obj: OperationCallExp): T | undefined { return undefined }
  caseLoopExp(_obj: LoopExp): T | undefined { return undefined }
  caseIteratorExp(_obj: IteratorExp): T | undefined { return undefined }
  caseIterateExp(_obj: IterateExp): T | undefined { return undefined }
  caseLiteralExp(_obj: LiteralExp): T | undefined { return undefined }
  casePrimitiveLiteralExp(_obj: PrimitiveLiteralExp): T | undefined { return undefined }
  caseIntegerLiteralExp(_obj: IntegerLiteralExp): T | undefined { return undefined }
  caseRealLiteralExp(_obj: RealLiteralExp): T | undefined { return undefined }
  caseUnlimitedNaturalLiteralExp(_obj: UnlimitedNaturalLiteralExp): T | undefined { return undefined }
  caseStringLiteralExp(_obj: StringLiteralExp): T | undefined { return undefined }
  caseBooleanLiteralExp(_obj: BooleanLiteralExp): T | undefined { return undefined }
  caseNullLiteralExp(_obj: NullLiteralExp): T | undefined { return undefined }
  caseInvalidLiteralExp(_obj: InvalidLiteralExp): T | undefined { return undefined }
  caseEnumLiteralExp(_obj: EnumLiteralExp): T | undefined { return undefined }
  caseCollectionLiteralExp(_obj: CollectionLiteralExp): T | undefined { return undefined }
  caseTupleLiteralExp(_obj: TupleLiteralExp): T | undefined { return undefined }
  caseMapLiteralExp(_obj: MapLiteralExp): T | undefined { return undefined }
  caseIfExp(_obj: IfExp): T | undefined { return undefined }
  caseLetExp(_obj: LetExp): T | undefined { return undefined }
  caseVariableExp(_obj: VariableExp): T | undefined { return undefined }
  caseTypeExp(_obj: TypeExp): T | undefined { return undefined }
  caseMessageExp(_obj: MessageExp): T | undefined { return undefined }
  caseVariable(_obj: Variable): T | undefined { return undefined }
  caseConstraint(_obj: Constraint): T | undefined { return undefined }
  caseCollectionLiteralPart(_obj: CollectionLiteralPart): T | undefined { return undefined }
  caseCollectionItem(_obj: CollectionItem): T | undefined { return undefined }
  caseCollectionRange(_obj: CollectionRange): T | undefined { return undefined }
  caseTupleLiteralPart(_obj: TupleLiteralPart): T | undefined { return undefined }
  caseMapLiteralPart(_obj: MapLiteralPart): T | undefined { return undefined }
  caseTuplePart(_obj: TuplePart): T | undefined { return undefined }
  caseStateExp(_obj: StateExp): T | undefined { return undefined }

  defaultCase(_obj: EObject): T | undefined { return undefined }
}
