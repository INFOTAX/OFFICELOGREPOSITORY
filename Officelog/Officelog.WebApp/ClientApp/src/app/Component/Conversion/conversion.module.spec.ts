import { ConversionModule } from './conversion.module';

describe('ConversionModule', () => {
  let conversionModule: ConversionModule;

  beforeEach(() => {
    conversionModule = new ConversionModule();
  });

  it('should create an instance', () => {
    expect(conversionModule).toBeTruthy();
  });
});
